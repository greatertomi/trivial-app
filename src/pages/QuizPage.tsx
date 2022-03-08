import { Alert, Box, Button, CircularProgress } from '@mui/material';
import React, { useMemo } from 'react';
import { BsArrowRightCircle, BsUpload } from 'react-icons/bs';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../components/quiz/Question';
import { QuizQuestion } from '../types/quiz';

export const QuizPageContainer = styled.div`
  width: 600px;
  position: fixed;
  margin-top: 100px;
  left: calc(50% - (600px / 2));
  top: 50px;
  text-align: center;
`;

const QuizPage = () => {
  const hasQuestions = true;
  const { isLoading, error, data } =
    useQuery('queryData', () =>
      fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
      ).then((res) => res.json())
    ) || {};

  const quizQuestions = useMemo<QuizQuestion[]>(() => {
    return data?.results;
  }, [data?.results]);

  console.log({ quizQuestions });

  const renderQuestions = () => {
    return (
      <>
        {error && (
          <Box mb={2}>
            <Alert severity="error" title="This is cool">
              An error occurred while fetching data
            </Alert>
          </Box>
        )}
        <Question
          questionNumber="1 of 4"
          category="Entertainment"
          question="Is this good or bad?"
        />
        {hasQuestions ? (
          <Button variant="contained" color="primary" size="large">
            <Box mr={2}>Continue</Box>
            <BsArrowRightCircle color="white" size={20} />
          </Button>
        ) : (
          <Button
            component={Link}
            to="/review"
            variant="contained"
            color="primary"
            size="large"
          >
            <Box mr={2}>Submit</Box>
            <BsUpload color="white" size={20} />
          </Button>
        )}
      </>
    );
  };

  return (
    <QuizPageContainer>
      {isLoading ? (
        <Box>
          <CircularProgress />
        </Box>
      ) : (
        renderQuestions()
      )}
    </QuizPageContainer>
  );
};

export default QuizPage;
