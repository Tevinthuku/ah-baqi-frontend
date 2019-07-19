import actionTypes from '../../actions/types';
import articleReducer from '../articleReducers';

describe('articleReducer', () => {
  test('CREATE_ARTICLE action returns created:true', () => {
    const newState = articleReducer(undefined, { type: actionTypes.CREATE_ARTICLE });
    // console.log(newState.created)
    expect(newState.created).toBe(true);
  });
});
