import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useAppDispatch } from './hooks/hooks';
import { fetchWeather } from './store/weatherSlice';
import SearchBar from './components/SearchBar';

const AppWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #282c34;
`;

const AppContainer = styled.div`
  height: 80%;
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 10px;
`;

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchWeather('Taipei'));
  }, [dispatch]);

  return (
    <AppWrapper>
      <AppContainer>
        <SearchBar />
      </AppContainer>
    </AppWrapper>
  );
}

export default App;
