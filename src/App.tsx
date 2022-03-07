import React from 'react';
import styled from 'styled-components';
import './App.css';
import Navbar from './components/Navbar';
import GlobalStyle from './globalStyle';
import QuizPage from './pages/QuizPage';

const PageContainer = styled.div`
  background-color: #f3f5f9;
  height: 100vh;
`;

const App = () => {
  return (
    <PageContainer>
      <GlobalStyle />
      <Navbar />
      <QuizPage />
    </PageContainer>
  );
};

export default App;
