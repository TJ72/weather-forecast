import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hooks';
import ChartFrame from './Chart/ChartFrame';
import PieChart from './Chart/PieChart';

const ChartsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  flex-wrap: wrap;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;

  span {
    font-weight: 500;
  }
`;

function HumidityChart() {
  const { weatherData } = useAppSelector((state) => state.weather);

  return (
    <ChartFrame title="Humidity (% in average)">
      <ChartsContainer>
        {weatherData.weatherList.map((weatherDetails, idx) => {
          return (
            <ChartWrapper key={`${weatherDetails}-${idx}`}>
              <span>{weatherDetails.humidity.toFixed(2)}%</span>
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
