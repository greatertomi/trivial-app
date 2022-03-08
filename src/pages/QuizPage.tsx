import { Box, Button } from '@mui/material';
import React from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import styled from 'styled-components';
import Question from '../components/quiz/Question';

export const QuizPageContainer = styled.div`
  width: 600px;
  position: fixed;
  margin-top: 100px;
  left: calc(50% - (600px / 2));
  top: 50px;
  text-align: center;
`;

const QuizPage = () => {
  return (
    <QuizPageContainer>
      <Question
        questionNumber="1 of 4"
        category="Entertainment"
        question="Is this good or bad?"
      />
      <Button variant="contained" color="primary" size="large">
        <Box mr={2}>Continue</Box>
        <BsArrowRightCircle color="white" size={20} />
      </Button>
    </QuizPageContainer>
  );
};

export default QuizPage;
