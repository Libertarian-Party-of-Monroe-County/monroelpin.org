import React from 'react';
import Container from '@mui/material/Container';
import Nav from '../Nav/Nav';

const BlogPostLayout = ({ children }) => {
  return (
    <>
      <Nav />
      <Container
        maxWidth="sm"
        sx={{
          paddingTop: 4
        }}
      >
        <main>{children}</main>
      </Container>
    </>
  );
};

export default BlogPostLayout;
