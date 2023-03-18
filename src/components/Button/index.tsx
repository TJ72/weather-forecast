import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  handleClick?: () => void;
};

const ButtonWrapper = styled.button`
  width: 100px;
  height: 30px;
  border-radius: 5px;
  border: 1px solid #ccc;
  padding: 0 10px;
  font-size: 16px;
  cursor: pointer;
`;

function Button({ children, handleClick }: Props) {
  return <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>;
}

export default Button;
