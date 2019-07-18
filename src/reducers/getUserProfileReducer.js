import actionTypes from '../actions/types';

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
};
