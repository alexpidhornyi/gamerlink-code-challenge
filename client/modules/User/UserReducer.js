import { ADD_USER } from './UserActions';

// Initial State
const initialState = { touchedSearch: false, user: null };

const UserReducer = (state = initialState, action) => {
  //console.log('TOUCHED_SEARCH', TOUCHED_SEARCH);
  switch (action.type) {

    case ADD_USER :
      return {
        touchedSearch: true,
        user: action.user
      };
    default:
      return state;
  }
};

/* Selectors */

export const getUser = state => state.user.user;
export const getTouchedSearch = state => state.user.touchedSearch;

// Export Reducer
export default UserReducer;
