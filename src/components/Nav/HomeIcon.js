import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import * as navStyles from './nav.module.css';

const HomeIcon = () => {
  return (
    <div className={navStyles.HomeIcon}>
      <StaticImage
        src="../../images/torch.svg"
        alt="liberty torch icon"
        height={65}
      />
      <div className={navStyles.HomeIconText}>
        <div>
          <b>Libertarian Party</b>
        </div>
        <div>
          of <b className={navStyles.HomeIconLocation}>Monroe County</b>, IN
        </div>
      </div>
    </div>
  );
};

export default HomeIcon;
