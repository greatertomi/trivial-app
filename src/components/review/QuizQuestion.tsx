import { Box, Typography } from '@mui/material';
import parse from 'html-react-parser';
import React, { FC } from 'react';
import { FaCheck, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';
import {
  GREEN_BORDER_COLOR,
  GREEN_COLOR,
  RED_BORDER_COLOR,
  RED_COLOR,
} from '../../utils/variables';

const QuizQuestionContainer = styled.div<{ correct: boolean }>`
  background-color: #fff;
  margin: 0.5rem 0;
  padding: 1rem;
  width: 600px;
  font-size: 18px;
  box-shadow: 0 12px 19px rgb(60 128 209 / 9%);
  border-radius: 15px;
  border-width: 3px;
  border-style: solid;
  border-color: ${({ correct }) =>
    correct ? GREEN_BORDER_COLOR : RED_BORDER_COLOR};

  @media only screen and (max-width: 600px) {
    width: 500px;
  }

  @media only screen and (min-width: 992px) {
    width: 800px;
  }
`;

interface QuizQuestionProps {
  question: string;
  answer: string;
  correct: boolean;
}

const QuizQuestion: FC<QuizQuestionProps> = ({ question, answer, correct }) => {
  return (
    <QuizQuestionContainer correct={correct}>
      <Typography variant="h6" textAlign="left">
        {parse(question)}
      </Typography>
      <Box mt={1} display="flex" alignItems="center">
        <Box mr={1}>Your Answer: {answer}</Box>
        {correct ? (
          <FaCheck color={GREEN_COLOR} size={22} />
        ) : (
          <FaTimes color={RED_COLOR} size={22} />
        )}
      </Box>
    </QuizQuestionContainer>
  );
};

export default QuizQuestion;
