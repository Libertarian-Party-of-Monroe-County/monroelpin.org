import React from 'react';
import Container from '@mui/material/Container';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import Nav from '../../components/Nav/Nav';

const BlogPost = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, date, author } = frontmatter;

  return (
    <>
      <Nav />
      <Container maxWidth="sm"
        sx={{
          paddingTop: 4,
        }}
      >
        <Typography component="h1" variant="h2">
          {title}
        </Typography>
        <Typography component="p" variant="subtitle1" sx={{ marginBottom: 4 }}>
          {author} | {date}
        </Typography>
        <main>
          <MDXRenderer>{body}</MDXRenderer>
        </main>
      </Container>
    </>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        author
      }
      body
    }
  }
`;
export default BlogPost;
