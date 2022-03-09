import { Button, Typography } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as QuizIcon } from '../assets/quiz.svg';

const LandingPageContainer = styled.div`
  height: 80vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
  text-align: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <QuizIcon height={300} width={200} />
      <Typography variant="h4">Welcome to the Trivia Challenge</Typography>
      <Typography variant="h6">
        You will be presented with 10 True or False questions
      </Typography>
      <Typography variant="h6">Can you score 100%?</Typography>
      <Button
        component={Link}
        to="/quiz"
        variant="contained"
        color="primary"
        size="large"
      >
        Begin
      </Button>
    </LandingPageContainer>
  );
};

export default LandingPage;
