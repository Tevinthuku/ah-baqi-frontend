import actionTypes from '../actions/types';

const initialState = {
  data: {},
  error: null,
  loading: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.RATEARTICLE:
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case actionTypes.RATEARTICLEERROR:
      return {
        ...state,
        error: action.error,
        loading: false,
      };
    default:
      return state;
  }
}
