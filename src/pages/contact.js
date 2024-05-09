import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Layout from '../components/Layout/Layout';

const ContactPage = () => (
  <Layout>
    <main>
      <title>Contact</title>
      <Typography component="h1" variant="h1" sx={{ mb: 4 }}>
        Contact
      </Typography>
      <Typography component="h2" variant="h4">
        Leadership
      </Typography>
      <List dense={true} sx={{ mb: 2 }}>
        <ListItem disableGutters={true}>
          <b>Chair:</b>&nbsp;
          <Link href="mailto:chair@monroelpin.org">Sydney Bloom</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>Vice-Chair and Treasurer:</b>&nbsp;Jesse Bloom
        </ListItem>
        <ListItem disableGutters={true}>
          <b>Secretary:</b>&nbsp;Dr. Joshua Herring
        </ListItem>
      </List>
      <Typography component="h2" variant="h4">
        General
      </Typography>
      <List dense={true} sx={{ mb: 2 }}>
        <ListItem disableGutters={true}>
          <b>Info email:</b>&nbsp;
          <Link href="monroe@lpin.vote" color="primary">
            monroe@lpin.vote
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>Signal group:</b>&nbsp;
          <Link href="https://signal.group/#CjQKICq65YYvulg0wXB_KOZeiVzJA2uowvdFkcAJsbHHUJzUEhDHfBFvnWa5LgeR5zGT4f8S">
            Monroe County in Indiana Members
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>
            <Link href="https://twitter.com/LPMC_Indiana">Twitter</Link>
          </b>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>
            <Link href="https://www.linkedin.com/company/libertarian-party-of-monroe-county-in-indiana/">
              LinkedIn
            </Link>
          </b>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>
            <Link href="https://www.facebook.com/groups/868317740795600/">
              Facebook Group
            </Link>
          </b>
          &nbsp;and&nbsp;
          <b>
            <Link href="https://www.facebook.com/Libertarian-Party-of-Monroe-County-in-Indiana-111788734906640/">
              Facebook Page
            </Link>
          </b>
        </ListItem>
      </List>
      <Typography component="h2" variant="h4">
        Libertarian Party of Indiana
      </Typography>
      <p>
        The Libertarian Party of Monroe County in Indiana (LPMC) is affiliated
        with the{' '}
        <Link href="https://lpin.org/">Libertarian Party of Indiana</Link> (
        <Link href="https://lpin.org/">LPIN</Link>).
      </p>
      <ul>
        <li>
          <Link href="https://lpin.org/">Homepage</Link>
        </li>
        <li>
          <Link href="https://lpin.org/events/">Events</Link>
        </li>
      </ul>
      <p></p>
      <p></p>
      <Typography component="h2" variant="h4">
        Libertarian Party
      </Typography>
      <ul>
        <li>
          <Link href="https://www.lp.org/">
            National Libertarian Party Homepage
          </Link>
        </li>
      </ul>
    </main>
  </Layout>
);

export default ContactPage;
