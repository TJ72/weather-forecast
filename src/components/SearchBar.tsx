import React, { useRef } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks/hooks';
import { fetchWeather } from '../store/weatherSlice';
import Button from './Button';
import Checkbox from './Checkbox';

const BarWrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const TextInput = styled.input`
  width: 40%;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
`;

const UnitsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 10px;
`;

function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();

  function handleFetchWeather() {
    // TODO: handle error message
    const cityQuery = inputRef.current?.value.trim().toLowerCase();
    if (!cityQuery) return;
    dispatch(fetchWeather(cityQuery));
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
        <Checkbox>°C</Checkbox>
        <Checkbox>°F</Checkbox>
      </UnitsWrapper>
      <Button handleClick={handleFetchWeather}>Submit</Button>
    </BarWrapper>
  );
}

export default SearchBar;
