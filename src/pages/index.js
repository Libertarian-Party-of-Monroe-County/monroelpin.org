import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { StaticImage } from 'gatsby-plugin-image';
import { Link } from 'gatsby-theme-material-ui';
import useMediaQuery from '@mui/material/useMediaQuery';
import * as homeStyles from './index.module.css';

const IndexPage = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Box className={homeStyles.Box} sx={{ backgroundColor: 'primary.main' }}>
      <div className={homeStyles.HomeLogo}>
        {matches ? (
          <StaticImage
            src="../images/torch.svg"
            alt="liberty torch icon"
            height={200}
          />
        ) : (
          <StaticImage
            src="../images/torch.svg"
            alt="liberty torch icon"
            height={125}
          />
        )}
        <div className={homeStyles.HomeLogoTextBlock}>
          <Typography
            component="div"
            variant={matches ? 'h2' : 'h4'}
            color="white"
          >
            <b>Libertarian Party</b>
          </Typography>
          <Typography
            component="div"
            variant={matches ? 'h2' : 'h4'}
            color="white"
          >
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
