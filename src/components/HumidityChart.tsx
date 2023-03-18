import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hooks';
import ChartFrame from './Chart/ChartFrame';
import PieChart from './Chart/PieChart';

const ChartsContainer = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function HumidityChart() {
  const { weatherData } = useAppSelector((state) => state.weather);

  return (
    <ChartFrame title="Humidity (in average)">
      <ChartsContainer>
        {weatherData.weatherList.map((weatherDetails, idx) => {
          return (
            <ChartWrapper key={`${weatherDetails}-${idx}`}>
              <span>{weatherDetails.humidity}%</span>
              <PieChart percent={weatherDetails.humidity} />
              <span>{weatherDetails.date}</span>
            </ChartWrapper>
          );
        })}
      </ChartsContainer>
    </ChartFrame>
  );
}

export default HumidityChart;
