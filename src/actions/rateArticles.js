import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';
import actionTypes from './types';


export const rateArtcileSuccess = response => ({
  type: actionTypes.RATEARTICLE,
  payload: response,
});

export const rateArticleError = response => ({
  type: actionTypes.RATEARTICLEERROR,
  payload: response,
});

export const ratingActions = (slug, data) => async (dispatch) => {
  handleMessages('loading', 'Request processing...');
  try {
    const Rate = {
      rating: {
        rating: data,
      },
    };
    const response = await instance.post(`/articles/${slug}/rate/`, Rate);
    const ratings = response.data;
    dispatch(rateArtcileSuccess({ article: ratings }));
    handleMessages('success', 'You have rated this article 😬');
  } catch (error) {
    dispatch(rateArticleError(error));
    handleMessages('error', 'Kindly login to rate this article 😬');
  }
};
