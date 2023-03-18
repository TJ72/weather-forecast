import React from 'react';
import styled, { keyframes } from 'styled-components';

type Props = {
  value: number;
};

type BarProps = {
  height: number;
};

const growAnimation = keyframes`
  0% {
    height: 0;
  }
`;

const Bar = styled.div<BarProps>`
  width: 48px;
  height: ${({ height }) => height}px;
  background-color: #2596be;
  border-top-left-radius: 0.2rem;
  border-top-right-radius: 0.2rem;
  animation: ${growAnimation} 1.5s ease-in-out;
`;

function BarChart({ value }: Props) {
  return <Bar height={value} />;
}

export default BarChart;
