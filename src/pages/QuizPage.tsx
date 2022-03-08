import { Box, Button, Typography } from '@mui/material';
import { mapValues } from 'lodash';
import React, { useState } from 'react';
import { BsArrowRightCircle } from 'react-icons/bs';
import styled from 'styled-components';
import Option from '../components/quiz/Option';

export const QuizPageContainer = styled.div`
  width: 600px;
  position: fixed;
  left: calc(50% - (600px / 2));
  top: 100px;
  text-align: center;
`;

const QuizPage = () => {
  const [selected, setSelected] = useState({ true: false, false: false });

  const handleClickOption = (type: string) => {
    const currentSelected = mapValues(selected, () => false);
    setSelected({ ...currentSelected, [type]: true });
  };

  return (
    <QuizPageContainer>
      <Typography fontWeight="bold" color="#344356" mb={1}>
        1 of 4 (Entertainment)
      </Typography>
      <Typography variant="h5" fontWeight="bold">
        Is this back good or bad?
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
      <Button variant="contained" color="primary" size="large">
        <Box mr={2}>Continue</Box>
        <BsArrowRightCircle color="white" size={20} />
      </Button>
    </QuizPageContainer>
  );
};

export default QuizPage;
