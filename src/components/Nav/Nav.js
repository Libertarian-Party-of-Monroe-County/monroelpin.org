import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'gatsby-theme-material-ui';

const Nav = () => {
  return (
    <Box>
      <AppBar position="sticky">
        <Container>
          <Toolbar
            component="nav"
            disableGutters={true}
            variant="dense"
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            <Typography component="div">
              <Link to="/" underline="none" color="white">
                Home
              </Link>
            </Typography>
            <Typography component="div">
              <Link to="/about" underline="none" color="white">
                About
              </Link>
            </Typography>
            <Typography component="div">
              <Link to="/blog" underline="none" color="white">
                Blog
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Nav;
