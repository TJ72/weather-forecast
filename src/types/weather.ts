export interface WeatherData {
  type: 'data';
  city: City;
  weatherList: WeatherDetails[];
}

export interface APIError {
  type: 'error';
  message: string;
}

export interface WeatherDetails {
  date: string;
  humidity: number;
  maxTemp: number;
  minTemp: number;
}

export interface City {
  name: string;
  country: string;
}

export interface RawWeather {
  temp_min: number;
  temp_max: number;
  humidity: number;
}

export interface RawWeatherDetails {
  dt_txt: string;
  main: RawWeather;
}

export interface RawWeatherData {
  city: City;
  list: RawWeatherDetails[];
}
