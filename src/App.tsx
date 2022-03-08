import { ThemeProvider } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
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
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/quiz" element={<QuizPage />} />
            <Route path="/review" element={<ReviewPage />} />
          </Routes>
        </BrowserRouter>
      </PageContainer>
    </ThemeProvider>
  );
};

export default App;
