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
          variant="h4"
          sx={{
            mt: 4
          }}
        >
          The Libertarian Party of Monroe County affirms the following{' '}
          <b>principles</b>:
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary="That all people possess certain unalienable natural rights, and that among these are rights to
life, liberty, justly acquired property, and self-governance."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="That the only moral basis of government is the preservation and protection of unalienable
natural rights."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="That no person or institution, public or private, has the right to initiate the use of physical force,
coercion, or fraud against another person, and that all people are bound, without contract, to
abstain from infringing upon the natural rights of other people."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="That all people are entitled to choose their own lifestyles, provided they do not forcibly impose
their values on others."
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="That the voluntary and unrestricted exchange of goods and services is fundamental to a
peaceful and harmonious society."
            />
          </ListItem>
        </List>
      </main>
    </Layout>
  );
};

export default HomePage;
