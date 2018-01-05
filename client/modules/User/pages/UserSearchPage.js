import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

// Import Components
import UserSearchBox from '../components/UserSearchBox/UserSearchBox';
import UserStatView from '../components/UserStatView/UserStatView'
import UserRankingView from '../components/UserRankingView/UserRankingView'
import UserNotFound from '../components/UserNotFound/UserNotFound'
import UserName from '../components/UserName/UserName'
import { searchUser } from '../UserActions';
import { getUser, getTouchedSearch } from '../UserReducer';

import styles from './UserSearchPage.css';

class UserSearchPage extends Component {
  handleSearchUser = (name) => {
    this.props.dispatch(searchUser(name));
    
  };
  
  render() {
    return (
      <div className={styles['container']}>
        {this.props.touchedSearch}
        <UserSearchBox dispatch={this.props.dispatch}/>
        {this.displayUser(this.props.user, this.props.touchedSearch)}
      </div>
    );
  }
  displayUser = (user, touchedSearch) => {
    if (user) {
      return (
        <span>
          <UserName name={user.displayName} updated={user.lastUpdated}/>
          <div>
            {this.buildStats(user.stats)}
            {this.buildRankings(user.rankings)}
          </div>
        </span>
      );
    } else if (touchedSearch) {
      return (
        <UserNotFound/>
      );
    }
  } 
  buildStats = (obj) => {
    if (obj) {
      return Object.entries(obj).map(([key, value], i) => {
        return (
          <UserStatView key={key} title={key} value={value} />
        )
      })
    } else {
      return;
    }
  };
  buildRankings = (obj) => {
    if (obj) {
      return obj.map((item, i) => {
        return (
          <UserRankingView
            key = {i}
            rank={item.rank} 
            type={item.type}
            rating={item.rating}
            gamesPlayed={item.gamesPlayed}
            topPercentile={item.topPercentile}
            rankImage={item.rankImage} />
        )
      })
    } else {
      return;
    }
  };
}

// Retrieve data from store as props
function mapStateToProps(state) {
  return {
    user: getUser(state),
    touchedSearch: getTouchedSearch(state),
  };
}

UserSearchPage.propTypes = {
  user: PropTypes.object,
  touchedSearch: PropTypes.bool.isRequired,
  dispatch: PropTypes.func.isRequired,
};

UserSearchPage.contextTypes = {
  router: React.PropTypes.object,
};

export default connect(mapStateToProps)(UserSearchPage);
