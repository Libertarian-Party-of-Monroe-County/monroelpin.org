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
          <Link href="mailto:chair@monroelpin.org">Dr. Damir Cavar</Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>Vice-Chair:</b>&nbsp;Matt Batman
        </ListItem>
        <ListItem disableGutters={true}>
          <b>Treasurer:</b>&nbsp;Robert Milroy
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
          <Link href="mailto:info@monroelpin.org" color="primary">
            info@monroelpin.org
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
            <Link href="https://www.linkedin.com/company/libertarian-party-of-monroe-county-in-indiana/">LinkedIn</Link>
            <Link href="https://www.facebook.com/groups/868317740795600/">Facebook Group</Link>
            <Link href="https://www.facebook.com/Libertarian-Party-of-Monroe-County-in-Indiana-111788734906640/">Facebook Page</Link>
            <Link href="https://element.io/">Element</Link> (
            <Link href="https://matrix.org/">Matrix</Link>):
          </b>
          &nbsp;
          <Link href="https://matrix.to/#/!aTMTZLDrrvBnFjiADl:matrix.org?via=matrix.org">
            LPMC general room
          </Link>
        </ListItem>
        <ListItem disableGutters={true}>
          <b>
            <Link href="https://ipfs.io/">IPFS:</Link>
          </b>
          &nbsp; TBA
        </ListItem>
      </List>
      <Typography component="h2" variant="h4">
        Libertarian Party of Indiana
      </Typography>
      <p>
        The Libertarian Party of Monroe County in Indiana (LPMC) is affiliated
        with the <Link href="https://lpin.org/">Libertarian Party of Indiana</Link> (<Link href="https://lpin.org/">LPIN</Link>).
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
