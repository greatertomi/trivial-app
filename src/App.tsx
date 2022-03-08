import { ThemeProvider } from '@mui/material';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import QuizContext from './context/QuizContext';
import GlobalStyle from './globalStyle';
import LandingPage from './pages/LandingPage';
import QuizPage from './pages/QuizPage';
import ReviewPage from './pages/ReviewPage';
import { theme } from './theme';

const BrowserRouter = styled(Router)`
  background-color: #f3f5f9;
  padding-bottom: 50px;
  min-height: 100vh;
`;

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <QuizContext>
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/quiz" element={<QuizPage />} />
              <Route path="/review" element={<ReviewPage />} />
            </Routes>
          </BrowserRouter>
        </QuizContext>
      </ThemeProvider>
    </QueryClientProvider>
  );
};

export default App;
