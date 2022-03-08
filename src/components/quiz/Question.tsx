import { Box, Typography } from '@mui/material';
import { mapValues } from 'lodash';
import React, { FC, useState } from 'react';
import Option from './Option';

interface QuizPageProps {
  questionNumber: string;
  category: string;
  question: string;
}

const Question: FC<QuizPageProps> = ({
  questionNumber,
  category,
  question,
}) => {
  const [selected, setSelected] = useState({ true: false, false: false });

  const handleClickOption = (type: string) => {
    const currentSelected = mapValues(selected, () => false);
    setSelected({ ...currentSelected, [type]: true });
  };

  return (
    <>
      <Typography fontWeight="bold" color="#344356" mb={1}>
        {questionNumber} ({category})
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
    </>
  );
};

export default Question;
