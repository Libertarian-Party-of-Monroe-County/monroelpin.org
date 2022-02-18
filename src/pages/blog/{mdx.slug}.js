import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Typography from '@mui/material/Typography';
import PostLayout from '../../components/Layout/PostLayout';

const BlogPost = ({ data }) => {
  const { body, frontmatter } = data.mdx;
  const { title, date, author } = frontmatter;

  return (
    <PostLayout>
      <Typography component="h1" variant="h1">
        {title}
      </Typography>
      <Typography component="p" variant="subtitle1" sx={{ marginBottom: 4 }}>
        {author} | {date}
      </Typography>
      <MDXRenderer>{body}</MDXRenderer>
    </PostLayout>
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
