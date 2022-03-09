import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Emoji from '../components/Emoji';
import QuizQuestion from '../components/review/QuizQuestion';
import { useQuizContext } from '../context/QuizContext';

const ReviewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  margin-top: 20px;
`;

const ReviewPage = () => {
  const { answeredQuestions } = useQuizContext();
  const correctAnswerNumber = answeredQuestions.filter((e) => e.correct).length;
  const correctPercent = (correctAnswerNumber / answeredQuestions.length) * 100;

  return (
    <ReviewPageContainer>
      <Typography variant="h5" mb={1}>
        You Scored {correctAnswerNumber}/{answeredQuestions.length} &nbsp;
        {correctPercent >= 80 && <Emoji symbol="🎉" label="tada" />}
        {correctPercent >= 50 && correctPercent < 80 && (
          <Emoji symbol="💪" label="muscles" />
        )}
        {correctPercent < 50 && (
          <Emoji symbol="😑" label="Expressionless Face" />
        )}
      </Typography>
      {answeredQuestions.map(({ question, answer, correct }) => (
        <QuizQuestion
          question={question}
          answer={answer}
          correct={correct}
          key={question}
        />
      ))}
      <Box mt={1}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
        >
          <Box mr={1}>Try Again</Box>
          <BsArrowRepeat size={20} color="white" />
        </Button>
      </Box>
    </ReviewPageContainer>
  );
};

export default ReviewPage;
