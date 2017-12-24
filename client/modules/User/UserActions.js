import callApi from '../../util/apiCaller';

// Export Constants
export const ADD_USER = 'ADD_USER';

// Export Actions
export function searchUser(name) {
  return (dispatch) => {
    return callApi(`users/${name}`).then(res => dispatch(addUser(res.user)));
  };
}

export function addUser(user) {
  return {
    type: ADD_USER,
    user,
  };
}