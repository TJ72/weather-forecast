import React from 'react';
import styled from 'styled-components';

type PieChartProps = {
  percent: number;
};

type PieProps = {
  value: number;
};

const Pie = styled.div<PieProps>`
  width: 96px;
  height: 96px;
  border-radius: 50%;
  background: ${({ value }) =>
    `conic-gradient(#2596be 0% ${value}%, #dce5e6 ${value}% 100%)`};
`;

function PieChart({ percent }: PieChartProps) {
  return <Pie value={percent} />;
}

export default PieChart;
