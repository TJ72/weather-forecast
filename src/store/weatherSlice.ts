import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from './store';
import api from '../api/api';

const initialState = {
  loading: false,
  error: '',
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setErrorMessage: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
  },
});

export const { setLoading } = weatherSlice.actions;
export const fetchWeather =
  (city: string): AppThunk =>
  async (dispatch) => {
    dispatch(setLoading(true));
    try {
      // TODO: set the type of data
      const data = await api.getWeather(city);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoading(false));
  };

export default weatherSlice.reducer;
