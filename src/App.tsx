import { ThemeProvider } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import ReviewPage from './pages/ReviewPage';
import { theme } from './theme';

const PageContainer = styled.div`
  background-color: #f3f5f9;
  padding-bottom: 50px;
  min-height: 100vh;
`;

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <PageContainer>
        <Navbar />
        <ReviewPage />
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
