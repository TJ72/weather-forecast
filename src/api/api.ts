import { APIError, RawWeatherData, WeatherData } from '../types/weather';
import tidyRawWeatherData from '../utils/tidyRawWeatherData';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

const api = {
  getWeather: async (city: string): Promise<WeatherData | APIError> => {
    const response = await fetch(
      `${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
      const error = (await response.json()) as APIError;
      return {
        type: 'error',
        message: error.message,
      };
    }

    const data = (await response.json()) as RawWeatherData;
    const weatherData = tidyRawWeatherData(data);
    return weatherData;
  },
};

export default api;
