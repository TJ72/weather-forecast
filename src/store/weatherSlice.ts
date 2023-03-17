import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import api from '../api/api';
import { WeatherData } from '../types/weather';

export interface WeatherState {
  weatherData: WeatherData;
  loading: boolean;
  error: string;
}

const initialState: WeatherState = {
  weatherData: {
    city: {
      name: '',
      country: '',
    },
    weatherList: [],
  },
  loading: false,
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setWeatherData: (
      state: WeatherState,
      action: PayloadAction<WeatherData>
    ) => {
      state.weatherData = action.payload;
    },
    setLoading: (state: WeatherState, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state: WeatherState, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setWeatherData, setLoading, setErrorMessage } =
  weatherSlice.actions;
export const fetchWeather =
  (city: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    const data = await api.getWeather(city);
    if (data.type === 'error') {
      dispatch(setErrorMessage(data.message));
    } else {
      dispatch(setWeatherData(data as WeatherData));
    }
    dispatch(setLoading(false));
  };

export default weatherSlice.reducer;
