import React from 'react';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Layout from '../components/Layout/Layout';

const ContactPage = () => (
  <Layout>
    <main>
      <title>Contact</title>
      <h1>Contact</h1>
      <h2>Leadership</h2>
      <p>
        <b>Chair:</b>{' '}
        <Link href="mailto:chair@monroelpin.org">Dr. Damir Cavar</Link>
      </p>
      <p>
        <b>Vice-Chair:</b> Matt Batman
      </p>
      <p>
        <b>Treasurer:</b> Robert Milroy{' '}
      </p>
      <p>
        <b>Secretary:</b> Dr. Joshua Herring
      </p>
      <h2>General:</h2>
      <p>
        <b>Info email:</b>{' '}
        <Link href="mailto:info@monroelpin.org" color="primary">
          info@monroelpin.org
        </Link>
      </p>
      <p>
        <b>Signal group:</b>{' '}
        <Link href="https://signal.group/#CjQKICq65YYvulg0wXB_KOZeiVzJA2uowvdFkcAJsbHHUJzUEhDHfBFvnWa5LgeR5zGT4f8S">
          Monroe County in Indiana Members
        </Link>
      </p>
      <p>
        <b>
          <Link href="https://element.io/">Element</Link> (
          <Link href="https://matrix.org/">Matrix</Link>):
        </b>{' '}
        <Link href="https://matrix.to/#/!aTMTZLDrrvBnFjiADl:matrix.org?via=matrix.org">
          LPMC general room
        </Link>
      </p>
      <p>
        <b>
          <Link href="https://ipfs.io/">IPFS</Link> links:
        </b>{' '}
        TBA
      </p>
      <h2>Libertarian Party of Indiana</h2>
      <p>
        The Libertarian Party of Monroe County in Indiana (LPMC) is affiliated
        with the Libertarian Party of Indiana (LPIN).
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
      <h2>Libertarian Party</h2>
      <p>
        <Link href="https://www.lp.org/">Homepage</Link>
      </p>
    </main>
  </Layout>
);

export default ContactPage;
