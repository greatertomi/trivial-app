import { Alert, Box, CircularProgress } from '@mui/material';
import React, { useMemo, useState } from 'react';
import { useQuery } from 'react-query';
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
  const { isLoading, error, data } =
    useQuery('queryData', () =>
      fetch(
        'https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean'
      ).then((res) => res.json())
    ) || {};
  const [questionNumber] = useState(1);

  const quizQuestions = useMemo<QuizQuestion[]>(() => {
    return data?.results;
  }, [data?.results]);

  console.log({ quizQuestions });

  const answerQuestion = () => {
    console.log('answering question');
  };

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
          questionNumber={questionNumber}
          category={quizQuestions[questionNumber - 1].category}
          question={quizQuestions[questionNumber - 1].question}
          answerQuestion={answerQuestion}
        />
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
