import * as React from 'react';
import { Link } from 'gatsby-theme-material-ui';
import { graphql } from 'gatsby';
import Typography from '@mui/material/Typography';
import Layout from '../../components/Layout/Layout';

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Typography component="h1" variant="h1" sx={{ mb: 6 }}>
        Blog
      </Typography>
      {data.allMdx.nodes
        .filter((node) => node.frontmatter.draft !== true)
        .map((node) => (
          <article key={node.id}>
            <Typography variant="h6" sx={{ maxWidth: 600 }}>
              <Link to={`/blog/${node.slug}`} underline="none">
                {node.frontmatter.title}
              </Link>
            </Typography>
            <Typography variant="subtitle1" sx={{ mb: 6 }}>
              {node.frontmatter.date}
            </Typography>
          </article>
        ))}
      {data.allMdx.nodes.filter((node) => node.frontmatter.draft !== true)
        .length === 0 ? (
        <Typography component="p" variant="p">
          We don't have any blog posts, yet &mdash; we're new at this.
        </Typography>
      ) : null}
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
          draft
        }
        id
        slug
      }
    }
  }
`;
export default BlogPage;
