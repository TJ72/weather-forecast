import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
};

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

function Checkbox({ children }: Props) {
  return (
    <StyledLabel>
      <input type="checkbox" />
      <span>{children}</span>
    </StyledLabel>
  );
}

export default Checkbox;
