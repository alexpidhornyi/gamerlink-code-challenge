import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { FormattedMessage } from 'react-intl';

// Import Style
import styles from './UserNotFound.css';

function UserNotFound() {
  return (
    <div className={styles['main']}>
      User Not Found.
    </div>
  );
}


export default UserNotFound;