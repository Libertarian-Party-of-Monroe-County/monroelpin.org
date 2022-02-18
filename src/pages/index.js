import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-theme-material-ui';
import * as homeStyles from './index.module.css';

const IndexPage = () => {
  return (
    <Box className={homeStyles.Box} sx={{ backgroundColor: 'primary.main' }}>
      <div className={homeStyles.HomeLogo}>
        <StaticImage
          src="../images/torch.svg"
          alt="liberty torch icon"
          height={200}
        />
        <div className={homeStyles.HomeLogoTextBlock}>
          <Typography component="div" variant="h2" color="white">
            <b>Libertarian Party</b>
          </Typography>
          <Typography component="div" variant="h2" color="white">
            of <b>Monroe County</b>
          </Typography>
        </div>
      </div>
      <div className={homeStyles.HomeLinkBlock}>
        <Link to="/contact" sx={{ color: 'white' }}>
          Contact
        </Link>
        <Link to="/blog" sx={{ color: 'white' }}>
          Blog
        </Link>
      </div>
    </Box>
  );
};

export default IndexPage;
