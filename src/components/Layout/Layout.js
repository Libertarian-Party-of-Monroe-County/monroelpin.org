import React from 'react';
import Container from '@mui/material/Container';
import Nav from '../Nav/Nav';

const Layout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container
        sx={{
          paddingTop: 2
        }}
      >
        <main>{children}</main>
      </Container>
    </>
  );
};

export default Layout;
