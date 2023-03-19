import React, { ReactNode } from 'react';
import styled from 'styled-components';

type Props = {
  children: ReactNode;
  unit?: 'metric' | 'imperial';
  setUnit?: (unit: 'metric' | 'imperial') => void;
  denote?: 'metric' | 'imperial';
};

const StyledLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;

  & > span {
    font-size: 1rem;
    font-weight: 500;
  }
`;

function Checkbox({ children, unit, setUnit, denote }: Props) {
  function handleChange() {
    if (unit && setUnit) {
      setUnit(denote as 'metric' | 'imperial');
    }
  }
  return (
    <StyledLabel>
      <input
        type="checkbox"
        checked={unit === denote}
        onChange={handleChange}
      />
      <span>{children}</span>
    </StyledLabel>
  );
}

export default Checkbox;
