import React, { PropTypes,  Component} from 'react';
import { Link } from 'react-router';

// Import Style
import styles from './UserSearchBox.css';

class UserSearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {userName: ''};
  }
  render() {
    return (
      <div className={styles['search-container']}>
        <input placeholder="Look up user" value={this.state.userName} onChange={this.handleChange.bind(this)} className={styles['search-input']} onKeyPress={this.handleKeyPress.bind(this)} />
        <img className={styles['search-img']} src="images/icons/search.png" />
      </div>
    );
  }
  handleChange(event) {
    this.setState({userName: event.target.value});
  }
  handleKeyPress(e) {
    if (e.key === 'Enter') {
      this.search();
    }
  }
  search() {
    this.props.searchUser(this.state.userName);
  }
}

UserSearchBox.propTypes = {
  searchUser: PropTypes.func.isRequired,
};

export default UserSearchBox;
