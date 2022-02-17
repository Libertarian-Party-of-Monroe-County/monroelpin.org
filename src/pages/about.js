import React from 'react';
import Typography from '@mui/material/Typography';
import Layout from '../components/Layout/Layout';

const AboutPage = () => {
  return (
    <Layout>
      <main>
        <title>Libertarian Party of Monroe County, Indiana</title>
        <Typography component="h1" variant="h3">
          About
        </Typography>
      </main>
    </Layout>
  );
};

export default AboutPage;
