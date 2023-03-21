import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchBar from '../components/SearchBar';
import { setErrorMessage } from '../store/weatherSlice';

const mockStore = configureStore([]);

describe('SearchBar', () => {
  let store = mockStore({});

  beforeEach(() => {
    store = mockStore({
      weather: {
        errorMessage: '',
        loading: false,
        weatherData: null,
      },
    });
  });

  it('renders search input, checkbox and search button', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search City');
    const metricCheckbox = screen.getByLabelText('°C');
    const imperialCheckbox = screen.getByLabelText('°F');
    const searchButton = screen.getByRole('button');

    expect(searchInput).toBeInTheDocument();
    expect(metricCheckbox).toBeInTheDocument();
    expect(imperialCheckbox).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });

  it('dispatches setErrorMessage action when search input is empty', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchButton = screen.getByRole('button');

    fireEvent.click(searchButton);

    expect(store.getActions()).toEqual([
      setErrorMessage('Please enter a city name'),
    ]);
  });

  it('dispatches setErrorMessage action when search input contains only whitespace', () => {
    render(
      <Provider store={store}>
        <SearchBar />
      </Provider>
    );

    const searchInput = screen.getByPlaceholderText('Search City');
    const searchButton = screen.getByRole('button');

    const city = '   ';

    fireEvent.change(searchInput, { target: { value: city } });
    fireEvent.click(searchButton);

    expect(store.getActions()).toEqual([
      setErrorMessage('Please enter a city name'),
    ]);
  });
});
