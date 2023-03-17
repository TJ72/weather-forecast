import _ from 'lodash';
import { WeatherData, RawWeatherData, WeatherDetails } from '../types/weather';

export default function tidyRawWeatherData(data: RawWeatherData): WeatherData {
  let currDate: string = data.list[0].dt_txt.split(' ')[0];
  let dailyMaxTemp: number[] = [];
  let dailyMinTemp: number[] = [];
  let dailyHumidity: number[] = [];
  const weatherList = data.list.reduce(
    (result: WeatherDetails[], rawWeatherDetails, idx) => {
      const { dt_txt, main } = rawWeatherDetails;
      const date = dt_txt.split(' ')[0];

      if (date !== currDate) {
        result.push({
          date: currDate as string,
          humidity: _.mean(dailyHumidity),
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
