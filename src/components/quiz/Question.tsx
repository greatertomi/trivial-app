import { Box, Button, Typography, useTheme } from '@mui/material';
import parse from 'html-react-parser';
import { mapValues } from 'lodash';
import React, { FC, useState } from 'react';
import { BsArrowRightCircle, BsUpload } from 'react-icons/bs';
import Option from './Option';

interface QuizPageProps {
  questionNumber: number;
  category: string;
  question: string;
  answerQuestion: (answer: any) => void;
  correctAnswer: string;
}

const Question: FC<QuizPageProps> = ({
  questionNumber,
  category,
  question,
  answerQuestion,
  correctAnswer,
}) => {
  const [selected, setSelected] = useState({ true: false, false: false });
  const theme = useTheme();
  const [questionError, setQuestionError] = useState(false);

  const handleClickOption = (type: string) => {
    const currentSelected = mapValues(selected, () => false);
    setQuestionError(false);
    setSelected({ ...currentSelected, [type]: true });
  };

  const handleClickContinue = () => {
    if (!selected.true && !selected.false) {
      setQuestionError(true);
    } else {
      const answer = selected.true ? 'True' : selected.false ? 'False' : null;
      answerQuestion({
        question,
        answer,
        correct: correctAnswer === answer,
      });
      const resetSelected = mapValues(selected, () => false);
      setSelected(resetSelected);
    }
  };

  return (
    <>
      <Typography fontWeight="bold" color="#344356" mb={1}>
        {questionNumber} of 10 ({category})
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {parse(question)}
      </Typography>
      <Box display="flex" gap={3} justifyContent="center" mb={2}>
        <Option
          type="true"
          onClick={handleClickOption}
          selected={selected.true}
        />
        <Option
          type="false"
          onClick={handleClickOption}
          selected={selected.false}
        />
      </Box>
      {questionError && (
        <Typography mb={2} color={theme.palette.error.main}>
          Please, answer this question
        </Typography>
      )}
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleClickContinue}
      >
        {questionNumber < 10 ? (
          <>
            <Box mr={2}>Continue</Box>
            <BsArrowRightCircle color="white" size={20} />
          </>
        ) : (
          <>
            <Box mr={2}>Submit</Box>
            <BsUpload color="white" size={20} />
          </>
        )}
      </Button>
    </>
  );
};

export default Question;
