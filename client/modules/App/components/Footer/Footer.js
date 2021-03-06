import React from 'react';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './Footer.css';

// Import Images
import bg from '../../header-bk.png';

export function Footer() {
  return (
    <div style={{ background: `#FFF url(${bg}) center` }} className={styles.footer}>
      <p>&copy; 2017 &middot; GamerLink Inc.</p>
      <p><FormattedMessage id="twitterMessage" /> : <a href="https://twitter.com/@gamerlinkapp" target="_Blank">@GamerLinkApp</a></p>
    </div>
  );
}

export default Footer;
