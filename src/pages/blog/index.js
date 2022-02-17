import * as React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { graphql } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout/Layout';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <h1>Blog</h1>
      {data.allMdx.nodes.map((node) => (
        <article key={node.id}>
          <Typography variant="h3">
            <Link to={`/blog/${node.slug}`} underline="none">{node.frontmatter.title}</Link>
          </Typography>
          <Typography variant="subtitle1" sx={{ mb: 6 }}>
            {node.frontmatter.date}
          </Typography>
        </article>
      ))}
    </Layout>
  );
};
export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
