import React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
import { useAppSelector } from '../hooks/hooks';
import ChartFrame from './Chart/ChartFrame';
import BarChart from './Chart/BarChart';

type Props = {
  type: string;
};

const ChartsContainer = styled.div`
  height: 120px;
  display: flex;
  gap: 6px;
  justify-content: space-between;
`;

const ChartWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  span {
    font-weight: 500;
  }
`;

function TemperatureChart({ type }: Props) {
  const { weatherData } = useAppSelector((state) => state.weather);
  const max = _.maxBy(weatherData.weatherList, 'maxTemp')?.maxTemp as number;
  const min = _.minBy(weatherData.weatherList, 'minTemp')?.minTemp as number;
  const isMaxTemp = type === 'maxTemp';

  function formatFrameTitle() {
    if (weatherData.unit === 'metric') {
      return isMaxTemp ? 'Max Temperature (°C)' : 'Min Temperature (°C)';
    } else {
      return isMaxTemp ? 'Max Temperature (°F)' : 'Min Temperature (°F)';
    }
  }

  function getBarChartHeight(value: number) {
    return ((value - min) / (max - min)) * 60 + 40;
  }

  return (
    <ChartFrame title={formatFrameTitle()}>
      <ChartsContainer>
        {weatherData.weatherList.map((weatherDetails, idx) => {
          return (
            <ChartWrapper key={`${weatherDetails}-${idx}`}>
              <span>
                {isMaxTemp
                  ? weatherDetails.maxTemp.toFixed(2)
                  : weatherDetails.minTemp.toFixed(2)}
              </span>
              <BarChart
                value={
                  isMaxTemp
                    ? getBarChartHeight(weatherDetails.maxTemp)
                    : getBarChartHeight(weatherDetails.minTemp)
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
