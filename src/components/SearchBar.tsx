import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/hooks';
import { setErrorMessage, fetchWeather } from '../store/weatherSlice';
import SearchButton from './Button/SearchButton';
import Checkbox from './Checkbox';

const BarWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: 7px;
  align-items: center;
  margin-bottom: 20px;
`;

const TextInput = styled.input`
  width: 40%;
  height: 36px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

function SearchBar() {
  const [unit, setUnit] = useState<'metric' | 'imperial'>('metric');
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleFetchWeather() {
    const cityQuery = inputRef.current?.value.trim().toLowerCase();
    if (!cityQuery) {
      dispatch(setErrorMessage('Please enter a city name'));
      return;
    }
    dispatch(setErrorMessage(''));
    dispatch(fetchWeather(cityQuery, unit));
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Enter') {
      handleFetchWeather();
    }
  };

  return (
    <BarWrapper>
      <TextInput
        placeholder="Search City"
        ref={inputRef}
        onKeyDown={handleKeyDown}
      />
      <UnitsWrapper>
        <Checkbox unit={unit} setUnit={setUnit} denote="metric">
          °C
        </Checkbox>
        <Checkbox unit={unit} setUnit={setUnit} denote="imperial">
          °F
        </Checkbox>
      </UnitsWrapper>
      <SearchButton handleClick={handleFetchWeather} />
    </BarWrapper>
  );
}

export default SearchBar;
