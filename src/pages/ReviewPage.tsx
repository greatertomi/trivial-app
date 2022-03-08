import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import { BsArrowRepeat } from 'react-icons/bs';
import { Link } from 'react-router-dom';
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
      <QuizQuestion
        question="This is the question"
        answer="True"
        passed={false}
      />
      <Box mt={1}>
        <Button
          component={Link}
          to="/"
          variant="contained"
          color="primary"
          size="large"
        >
          <Box mr={1}>Try Again</Box>
          <BsArrowRepeat size={20} color="white" />
        </Button>
      </Box>
    </ReviewPageContainer>
  );
};

export default ReviewPage;
