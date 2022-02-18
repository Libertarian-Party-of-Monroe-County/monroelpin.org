import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import PostLayout from '../../components/Layout/PostLayout';

const BlogPost = ({ data }) => {
  return (
    <PostLayout>
      <Typography component="h1" variant="h1">
        {data.mdx.frontmatter.title}
      </Typography>
      <Typography component="p" variant="subtitle1" sx={{ marginBottom: 4 }}>
        {data.mdx.frontmatter.date}
      </Typography>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </PostLayout>
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
