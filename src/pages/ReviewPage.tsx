import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Emoji from '../components/Emoji';
import QuizQuestion from '../components/review/QuizQuestion';
import { useQuizContext } from '../context/QuizContext';
import { queryClient } from '../utils/reactQuery';

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
  const { answeredQuestions, resetAnsweredQuestions } = useQuizContext();
  const correctAnswerNumber = answeredQuestions.filter((e) => e.correct).length;
  const correctPercent = (correctAnswerNumber / answeredQuestions.length) * 100;
  const navigate = useNavigate();

  const tryAgain = async () => {
    try {
      resetAnsweredQuestions();
      navigate('/');
      await queryClient.invalidateQueries('quizQuestions');
    } catch (err) {
      console.error(err);
    }
  };

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
          variant="contained"
          color="primary"
          size="large"
          onClick={tryAgain}
        >
          <Box mr={1}>Try Again</Box>
          <BsArrowRepeat size={20} color="white" />
        </Button>
      </Box>
    </ReviewPageContainer>
  );
};

export default ReviewPage;
