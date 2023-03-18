import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  title: string;
};

const FrameWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

function ChartFrame({ children, title }: Props) {
  return (
    <FrameWrapper>
      <h3>{title}</h3>
      {children}
    </FrameWrapper>
  );
}

export default ChartFrame;
