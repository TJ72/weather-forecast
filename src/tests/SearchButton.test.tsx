import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import SearchButton from '../components/Button/SearchButton';

const mockStore = configureStore([]);

describe('SearchButton component', () => {
  test('renders "Search" when not loading', () => {
    const store = mockStore({
      weather: { loading: false },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SearchButton />
      </Provider>
    );

    const button = getByText('Search');
    expect(button).toBeInTheDocument();
  });

  test('renders "Loading" when loading', () => {
    const store = mockStore({
      weather: { loading: true },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SearchButton />
      </Provider>
    );

    const loadingText = getByText('Loading');
    expect(loadingText).toBeInTheDocument();
  });

  test('calls handleClick when clicked', () => {
    const handleClick = jest.fn();
    const store = mockStore({
      weather: { loading: false },
    });

    const { getByText } = render(
      <Provider store={store}>
        <SearchButton handleClick={handleClick} />
      </Provider>
    );

    const button = getByText('Search');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
