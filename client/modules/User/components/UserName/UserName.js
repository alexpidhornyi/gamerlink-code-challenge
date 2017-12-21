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
    console.log(timestamp, (Date.now() / 1000));
    var difference = (Date.now() / 1000) - parseInt(timestamp);
    
    var daysDifference = Math.floor(difference/1000/60/60/24);
    difference -= daysDifference*1000*60*60*24

    var hoursDifference = Math.floor(difference/1000/60/60);
    difference -= hoursDifference*1000*60*60

    var minutesDifference = Math.floor(difference/1000/60);
    difference -= minutesDifference*1000*60

    var secondsDifference = Math.floor(difference/1000);
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
