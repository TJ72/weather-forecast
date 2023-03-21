import { WeatherDataSchema, APIErrorSchema } from '../schemas/weatherSchemas';
import { APIError, WeatherData } from '../types/weather';
import tidyRawWeatherData from '../utils/tidyRawWeatherData';

const API_KEY = process.env.REACT_APP_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/forecast';

export const getForecastData = async (
  city: string,
  unit: 'metric' | 'imperial'
): Promise<WeatherData | APIError> => {
  const response = await fetch(
    `${BASE_URL}?q=${city}&appid=${API_KEY}&units=${unit}`
  );

  if (!response.ok) {
    const error = (await response.json()) as APIError;
    const result = APIErrorSchema.safeParse(error);
    if (!result.success) {
      return {
        type: 'error',
        message: 'Unknown error',
      };
    }
    return {
      type: 'error',
      message: error.message,
    };
  }

  // zod will throw an error if the data is not valid
  const data = WeatherDataSchema.parse(await response.json());
  const weatherData = tidyRawWeatherData(data);
  return { ...weatherData, unit };
};
