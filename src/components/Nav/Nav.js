import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Link } from 'gatsby-theme-material-ui';
import HomeIcon from './HomeIcon';

const Nav = () => {
  return (
    <Box>
      <AppBar position="sticky" sx={{ py: 1 }}>
        <Container>
          <Toolbar
            component="nav"
            disableGutters={true}
            sx={{ justifyContent: 'space-between', overflowX: 'auto' }}
          >
            <Link to="/" underline="none" sx={{ color: 'white' }}>
              <HomeIcon />
            </Link>
            <div>
              <Typography component="span">
                <Link to="/about" underline="none" sx={{ color: 'white' }}>
                  About
                </Link>
              </Typography>
              <Typography component="span" sx={{ pl: 1 }}>
                <Link to="/contact" underline="none" sx={{ color: 'white' }}>
                  Contact
                </Link>
              </Typography>
              <Typography component="span" sx={{ pl: 1 }}>
                <Link to="/blog" underline="none" sx={{ color: 'white' }}>
                  Blog
                </Link>
              </Typography>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};
export default Nav;
