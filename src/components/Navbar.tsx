import { Typography } from '@mui/material';
import React from 'react';
import styled from 'styled-components';

const NavbarContainer = styled.div`
  background: white;
  padding: 15px 5px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 5%);
  position: sticky;
  top: 0;
`;

const Navbar = () => {
  return (
    <NavbarContainer>
      <Typography variant="h4">TrivialApp</Typography>
    </NavbarContainer>
  );
};

export default Navbar;
