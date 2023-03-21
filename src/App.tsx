import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { fetchWeather } from './store/weatherSlice';
import SearchBar from './components/SearchBar';
import TemperatureChart from './components/TemperatureChart';
import HumidityChart from './components/HumidityChart';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #d3eaf2;

  @media (max-width: 768px) {
    height: auto;
  }
`;

const AppContainer = styled.div`
  height: 80%;
  width: 70%;
  min-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    padding: 20px;
  }
`;

const ChartsWrapper = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    margin-bottom: 0;
    flex-direction: column;
  }
`;

const ErrorMessage = styled.div`
  color: red;
  font-size: 1.2rem;
  font-weight: 500;
`;

function App() {
  const { errorMessage, weatherData } = useAppSelector(
    (state) => state.weather
  );
  const dispatch = useAppDispatch();
  const city = weatherData?.city.name;
  const country = weatherData?.city.country;

  useEffect(() => {
    dispatch(fetchWeather('Taipei', 'metric'));
  }, [dispatch]);

  return (
    <AppWrapper>
      <AppContainer>
        <SearchBar />
        {errorMessage && <ErrorMessage>❌ {errorMessage}</ErrorMessage>}
        <h2>{`${city} - ${country}`}</h2>
        <ChartsWrapper>
          <TemperatureChart type="maxTemp" />
          <TemperatureChart type="minTemp" />
        </ChartsWrapper>
        <HumidityChart />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
