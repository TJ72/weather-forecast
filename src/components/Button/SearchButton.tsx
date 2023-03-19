import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { useAppSelector } from '../../hooks/hooks';

type Props = {
  handleClick?: () => void;
};

type StyledButtonProps = {
  loading: string;
};

const loadingAnimation = keyframes`
  0% {
    transform: translateX(-20px);
  }
  100% {
    transform: translateX(25px);
  }
}
`;

const StyledButton = styled.button<StyledButtonProps>`
  position: relative;
  width: 100px;
  height: 44px;
  border-radius: 5px;
  border: 0;
  padding: 0 10px;
  transform: translateZ(0);
  font-size: 16px;
  background: #1a6985;
  color: #f9f9f9;
  overflow: hidden;
  cursor: pointer;

  & > span {
    position: relative;
    z-index: 3;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 300%;
    height: 100%;
    opacity: 0;
    transition: opacity 0.25s;
  }

  &::before {
    z-index: 1;
    background: #1a6985
      repeating-linear-gradient(
        60deg,
        transparent,
        transparent 10px,
        #1e7898 10px,
        #1e7898 20px
      );
  }

  &::after {
    z-index: 2;
    background: linear-gradient(transparent, #1a6985 90%);
  }

  ${({ loading }) =>
    loading === 'true' &&
    css`
      &::before,
      &::after {
        opacity: 1;
      }

      &::before {
        animation: ${loadingAnimation} 1s infinite linear;
      }
    `}
`;

function SearchButton({ handleClick }: Props) {
  const { loading } = useAppSelector((state) => state.weather);

  return (
    <StyledButton loading={`${loading}`} onClick={handleClick}>
      <span>{loading ? 'Loading' : 'Search'}</span>
    </StyledButton>
  );
}

export default SearchButton;
