import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

const articleActions = (action, slug = '', data = {}) => async (dispatch) => {
  let response;
  switch (action) {
    case 'edit':
      try {
        response = await instance.put(`/articles/${slug}/`, data);
        dispatch({
          type: actionTypes.EDIT_ARTICLE,
          payload: response.data,
        });
        handleMessages('success', 'Article successfully edited 😄');
      } catch (error) {
        handleMessages('error', 'Failed 😬');
      }
      break;
    case 'delete':
      try {
        handleMessages('loading', 'Deleting article...')
        await instance.delete(`/articles/${slug}/`, data);
        const userId = localStorage.getItem('user_id')
        response = await instance.get(`/user_articles/${userId}/`);
        dispatch({
          type: actionTypes.FETCH_USER_ARTICLES,
          payload: response.data,
        });
        handleMessages('success', 'Article successfully deleted 😄');
      } catch (error) {
        handleMessages('error', 'Failed 😬');
      }
      break;
    default:
      break;
  }
};

export default articleActions;
