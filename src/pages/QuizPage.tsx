import { Alert, Box, CircularProgress } from '@mui/material';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Question from '../components/quiz/Question';
import { useQuizContext } from '../context/QuizContext';
import { QuizAnswer } from '../types/quiz';

export const QuizPageContainer = styled.div`
  width: 600px;
  position: fixed;
  margin-top: 100px;
  left: calc(50% - (600px / 2));
  top: 50px;
  text-align: center;

  @media only screen and (max-width: 600px) {
    width: 500px;
    left: calc(50% - (500px / 2));
  }
`;

const QuizPage = () => {
  const { quizQuestions, quizError, quizLoading, addAnsweredQuestion } =
    useQuizContext();
  const [questionNumber, setQuestionNumber] = useState<number>(1);
  const navigate = useNavigate();

  const answerQuestion = (answer: QuizAnswer) => {
    addAnsweredQuestion(answer);
    setQuestionNumber(questionNumber + 1);
    if (questionNumber >= 10) {
      navigate('/review');
    }
  };

  const renderQuestions = () => {
    return (
      <>
        {quizError && (
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
          correctAnswer={quizQuestions[questionNumber - 1].correct_answer}
        />
      </>
    );
  };

  return (
    <QuizPageContainer>
      {quizLoading ? (
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
