import React from 'react';
import Container from '@mui/material/Container';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <Container>
        <main>{children}</main>
      </Container>
    </div>
  );
};

export default Layout;
