import _ from 'lodash';
import { WeatherData, RawWeatherData, WeatherDetails } from '../types/weather';
import { getDateFormat } from './string';

export default function tidyRawWeatherData(data: RawWeatherData): WeatherData {
  let currDate: string = data.list[0].dt_txt.split(' ')[0];
  let dailyMaxTemp: number[] = [];
  let dailyMinTemp: number[] = [];
  let dailyHumidity: number[] = [];
  const weatherList = data.list.reduce(
    (result: WeatherDetails[], rawWeatherDetails) => {
      const { dt_txt, main } = rawWeatherDetails;
      const date = dt_txt.split(' ')[0];

      if (date !== currDate) {
        const dateFormat = getDateFormat(currDate);
        result.push({
          date: dateFormat as string,
          humidity: _.round(_.mean(dailyHumidity), 2),
          maxTemp: _.max(dailyMaxTemp) as number,
          minTemp: _.min(dailyMinTemp) as number,
        });
        currDate = date;
        dailyMaxTemp = [];
        dailyMinTemp = [];
        dailyHumidity = [];
      }
      dailyMaxTemp.push(main.temp_max);
      dailyMinTemp.push(main.temp_min);
      dailyHumidity.push(main.humidity);
      return result;
    },
    []
  );

  return {
    type: 'data',
    city: data.city,
    weatherList: weatherList,
  };
}
