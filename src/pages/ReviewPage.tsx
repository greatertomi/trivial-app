import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import Emoji from '../components/Emoji';
import QuizQuestion from '../components/review/QuizQuestion';

const ReviewPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  overflow-y: auto;
  margin-top: 20px;
`;

const ReviewPage = () => {
  return (
    <ReviewPageContainer>
      <Typography variant="h5" mb={1}>
        You Scored 3/10 &nbsp;
        <Emoji symbol="🎉" label="sheep" />
      </Typography>
      <QuizQuestion question="This is the question" answer="True" passed />
      <QuizQuestion question="This is the question" answer="True" passed />
      <Box mt={1}>
        <Button size="large" color="primary" variant="contained">
          Try Again
        </Button>
      </Box>
    </ReviewPageContainer>
  );
};

export default ReviewPage;
