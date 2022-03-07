import React from 'react';
import './App.css';
import { Typography } from '@mui/material';
import GlobalStyle from './globalStyle';

const App = () => {
  return (
    <div>
      <GlobalStyle />
      <Typography>Hello now</Typography>
      Hello from here
    </div>
  );
};

export default App;
