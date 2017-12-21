import React, { PropTypes,  Component} from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './UserRankingView.css';
/*
{this.props.rank}|| 
        {this.props.rating}||
        {this.props.gamesPlayed}||
        {this.props.topPercentile}||
          {this.props.rankImage}||
*/
class UserRankingView extends Component {
  render() {
    return (
      <div className={styles['parent']}>
        <div className={styles['type']}>
          {this.props.type}
        </div>
        <div className={styles['left']}>
          <div className={styles['sub-container']}>
            <div className={styles['sub-container-value']}>
              {this.props.gamesPlayed}
            </div>
            <div className={styles['sub-container-title']}>
              Games Played
            </div>
          </div>
          <div className={styles['sub-container']}>
            <div className={styles['sub-container-value']}>
            {this.props.topPercentile + '%'}
            </div>
            <div className={styles['sub-container-title']}>
              Top Percentile
            </div>
          </div>
        </div>
        <div className={styles['right']}>
          <div className={styles['sub-container']}>
            <div className={styles['sub-container-value']}>
              {this.props.rating}
            </div>
            <div className={styles['sub-container-title']}>
              {this.props.rank}
            </div>
          </div>
          <img src={"images/ranks/" + this.props.rankImage + ".png"}/>
        </div>        
      </div>
    );
  }
}

UserRankingView.propTypes = {
  rank: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  gamesPlayed: PropTypes.string.isRequired,
  topPercentile: PropTypes.string.isRequired,
  rankImage: PropTypes.string.isRequired,
};

export default UserRankingView;
