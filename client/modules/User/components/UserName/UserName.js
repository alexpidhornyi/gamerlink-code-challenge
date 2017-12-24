import React, { PropTypes,  Component} from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './UserName.css';

class UserName extends Component {
  render() {
    return (
      <div className={styles['parent']}>
        <div className={styles['name']}>{this.props.name}</div>
        <div className={styles['updated']}>Last Updated: {this.calculateLastUpdated(this.props.updated)} </div>
      </div>
    );
  }
  calculateLastUpdated(timestamp) {
    var difference = (Date.now() / 1000) - parseInt(timestamp);

    var daysDifference = Math.floor(difference/60/60/24);
    difference -= daysDifference*60*60*24

    var hoursDifference = Math.floor(difference/60/60);
    difference -= hoursDifference*60*60

    var minutesDifference = Math.floor(difference/60);
    difference -= minutesDifference*60

    var secondsDifference = Math.floor(difference);
    if (daysDifference) {
      return daysDifference + ' days';
    } else if (hoursDifference) {
      return hoursDifference + ' hours';
    } else if (minutesDifference) {
      return minutesDifference + ' mins';
    } else if (secondsDifference) {
      return secondsDifference + ' secs';
    } else {
      return 'right now'
    }
  }
}

UserName.propTypes = {
  name: PropTypes.string.isRequired,
  updated: PropTypes.string.isRequired,
};

export default UserName;
