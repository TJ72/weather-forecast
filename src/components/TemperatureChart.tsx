import React from 'react';
import styled from 'styled-components';
import { useAppSelector } from '../hooks/hooks';
import ChartFrame from './Chart/ChartFrame';
import BarChart from './Chart/BarChart';

type Props = {
  type: string;
};

const ChartsContainer = styled.div`
  display: flex;
  gap: 2px;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
`;

function TemperatureChart({ type }: Props) {
  const { weatherData } = useAppSelector((state) => state.weather);
  const isMaxTemp = type === 'maxTemp';

  return (
    <ChartFrame title={isMaxTemp ? 'Max Temperature' : 'Min Temperature'}>
      <ChartsContainer>
        {weatherData.weatherList.map((weatherDetails, idx) => {
          return (
            <ChartWrapper key={`${weatherDetails}-${idx}`}>
              <span>
                {isMaxTemp ? weatherDetails.maxTemp : weatherDetails.minTemp}
              </span>
              <BarChart
                value={
                  isMaxTemp ? weatherDetails.maxTemp : weatherDetails.minTemp
                }
              />
              <span>{weatherDetails.date}</span>
            </ChartWrapper>
          );
        })}
      </ChartsContainer>
    </ChartFrame>
  );
}

export default TemperatureChart;
