import React, { PropTypes,  Component} from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './UserStatView.css';

class UserStatView extends Component {
  render() {
    return (
      <div className={styles['parent']}>
        <div className={styles['value']}>{this.props.value}</div>
        <div className={styles['title']}> {this.strCapitalize(this.props.title)} </div>
      </div>
    );
  }
  strCapitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
}

UserStatView.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default UserStatView;
