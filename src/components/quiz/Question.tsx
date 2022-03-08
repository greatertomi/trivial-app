import { Box, Button, Typography, useTheme } from '@mui/material';
import { mapValues } from 'lodash';
import React, { FC, useState } from 'react';
import { BsArrowRightCircle, BsUpload } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Option from './Option';

interface QuizPageProps {
  questionNumber: number;
  category: string;
  question: string;
  answerQuestion: (answer: any) => void;
}

const Question: FC<QuizPageProps> = ({
  questionNumber,
  category,
  question,
  answerQuestion,
}) => {
  const [selected, setSelected] = useState({ true: false, false: false });
  const theme = useTheme();
  const [questionError] = useState(false);

  const handleClickOption = (type: string) => {
    const currentSelected = mapValues(selected, () => false);
    setSelected({ ...currentSelected, [type]: true });
  };

  return (
    <>
      <Typography fontWeight="bold" color="#344356" mb={1}>
        {questionNumber} of 10 ({category})
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        {question}
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
      {questionNumber < 10 ? (
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={answerQuestion}
        >
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

export default Question;
