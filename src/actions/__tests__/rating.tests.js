import { rateArtcileSuccess, rateArticleError, ratingActions } from '../rateArticles';
import actionTypes from '../types';
import store from '../../utils/testUtils';
import { instance } from '../../utils/axios';

const payload = {
  rating: 2,
};

describe('Rating articles actions', () => {
  it('should create an action to confirm successful rating', () => {
    const expectedAction = {
      type: actionTypes.RATEARTICLE,
      payload,
    };
    expect(rateArtcileSuccess(payload)).toEqual(expectedAction);
  });
  it('should create an action to indicate error on rating article', () => {
    const expectedAction = {
      type: actionTypes.RATEARTICLEERROR,
      payload,
    };
    expect(rateArticleError(payload)).toEqual(expectedAction);
  });
  test('dispatches RATEARTICLE', async () => {
    await store.dispatch(ratingActions(payload));
    const actions = store.getActions();
    expect(actions[0].type).toEqual('RATEARTICLE');
  });

  test('should fail', () => {
    // eslint-disable-next-line prefer-promise-reject-errors
    instance.post.mockImplementation(() => Promise.reject({}));
    store.dispatch(ratingActions(payload))
      .then(() => {
        const actions = store.getActions();
        expect(actions[1].type).toEqual('RATEARTICLEERROR');
      });
  });
});
