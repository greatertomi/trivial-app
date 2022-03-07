import { Box, Typography } from '@mui/material';
import { mapValues } from 'lodash';
import React, { useState } from 'react';
import styled from 'styled-components';
import Option from '../components/quiz/Option';

const QuizPageContainer = styled.div`
  width: 600px;
  margin-top: 50px;
  position: fixed;
  left: calc(50% - (600px / 2));
  top: 50px;
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
      <Typography variant="h5" fontWeight="bold">
        Is this back good or bad?
      </Typography>
      <Box display="flex" gap={3} justifyContent="center">
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
    </QuizPageContainer>
  );
};

export default QuizPage;
