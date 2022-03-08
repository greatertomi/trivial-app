import { Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const LandingPageContainer = styled.div`
  height: 80vh;
  width: 800px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const LandingPage = () => {
  return (
    <LandingPageContainer>
      <Typography variant="h4">Welcome to the Trivia Challenge</Typography>
      <Typography>
        You will be presented with 10 True or False questions
      </Typography>
      <Typography>Can you score 100%?</Typography>
      <Button variant="contained" size="large" color="primary">
        Begin
      </Button>
    </LandingPageContainer>
  );
};

export default LandingPage;
