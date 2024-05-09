import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout/Layout';
import Button from '@mui/material/Button';

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
        <Button variant="contained" href="/contact" color="secondary" sx={{
          mt: 4
        }}
        size="large"
        >
          Join Us
        </Button>
      </main>
    </Layout>
  );
};

export default HomePage;
