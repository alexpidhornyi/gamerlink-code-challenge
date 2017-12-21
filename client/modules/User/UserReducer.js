import { ADD_USER, TOUCHED_SEARCH } from './UserActions';

// Initial State
const initialState = { touchedSearch: false, user: null };

const UserReducer = (state = initialState, action) => {
  //console.log('TOUCHED_SEARCH', TOUCHED_SEARCH);
  switch (action.type) {

    case ADD_USER :
      return {
        touchedSearch: state.touchedSearch,
        user: action.user
      };
    case TOUCHED_SEARCH :
      return {
        touchedSearch: true,
        user: state.user
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
