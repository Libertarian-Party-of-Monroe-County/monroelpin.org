import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout/Layout';

const BlogPost = ({ data }) => {
  return (
    <Layout>
      <Typography component="h1" variant="h1">
        {data.mdx.frontmatter.title}
      </Typography>
      <Typography component="p" variant="subtitle1">
        {data.mdx.frontmatter.date}
      </Typography>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`;
export default BlogPost;
