import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as navStyles from './nav.module.css';

const HomeIcon = () => {
  return (
    <div className={navStyles.HomeIcon}>
      <StaticImage
        src="../../images/icon.png"
        alt="liberty torch icon"
        height={55}
      />
      <div className={navStyles.HomeIconText}>
        <div>
          <b>Libertarian Party</b>
        </div>
        <div>
          of <b>Monroe County</b>
        </div>
      </div>
    </div>
  );
};

export default HomeIcon;
