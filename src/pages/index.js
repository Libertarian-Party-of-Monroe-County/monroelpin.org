import React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Layout from '../components/Layout/Layout';

const HomePage = () => {
  return (
    <Layout>
      <main style={{ maxWidth: '768px' }}>
        <title>Home</title>
        <Typography
          component="p"
          variant="h1"
          sx={{
            mt: 4
          }}
        >
          All your freedoms.
        </Typography>
        <Typography
          component="p"
          variant="h1"
          sx={{
            mt: 4
          }}
        >
          All of the time.
        </Typography>
      </main>
    </Layout>
  );
};

export default HomePage;
