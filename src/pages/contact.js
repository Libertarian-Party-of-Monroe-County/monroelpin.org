import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Layout from '../components/Layout/Layout';

const ContactPage = () => {
  return (
    <Layout>
      <main>
        <title>Contact</title>
        <Typography
          component="h1"
          variant="h2"
          sx={{
            marginBottom: 4
          }}
        >
          Contact
        </Typography>
        <Typography
          component="p"
          variant="h5"
          sx={{
            marginBottom: 2
          }}
        >
          You can <b>email</b> us at{' '}
          <Link href="mailto:info@monroelpin.org" color="primary">
            info@monroelpin.org
          </Link>{' '}
          or{' '}
          <Link href="mailto:chair@monroelpin.org" color="primary">
            chair@monroelpin.org
          </Link>
          .
        </Typography>
        <Typography
          component="p"
          variant="h5"
          sx={{
            marginBottom: 2
          }}
        >
          You can join our <b>Signal group</b>{' '}
          <Link
            href="https://signal.group/#CjQKICq65YYvulg0wXB_KOZeiVzJA2uowvdFkcAJsbHHUJzUEhDHfBFvnWa5LgeR5zGT4f8S"
            color="primary"
          >
            here
          </Link>
          .
        </Typography>
        <Typography
          component="p"
          variant="h5"
          sx={{
            marginBottom: 2
          }}
        >
          You can join our <b>Element Matrix Room</b>{' '}
          <Link
            color="primary"
            href="https://matrix.to/#/!aTMTZLDrrvBnFjiADl:matrix.org?via=matrix.org"
          >
            here
          </Link>
          .
        </Typography>
      </main>
    </Layout>
  );
};

export default ContactPage;
