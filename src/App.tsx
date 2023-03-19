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
  background-color: #282c34;
`;

const AppContainer = styled.div`
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

function App() {
  const { errorMessage } = useAppSelector((state) => state.weather);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather('Taipei', 'metric'));
  }, [dispatch]);

  return (
    <AppWrapper>
      <AppContainer>
        <SearchBar />
        {errorMessage && <div>{errorMessage}</div>}
        <TemperatureChart type="maxTemp" />
        <TemperatureChart type="minTemp" />
        <HumidityChart />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
