import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

const articleActions = (action, slug, data) => async (dispatch) => {
  let response;
  switch (action) {
    case 'edit':
      try {
        response = await instance.put(`/articles/${slug}`, data);
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
        response = await instance.delete(`/articles/${slug}`, data);
        dispatch({
          type: actionTypes.DELETE_ARTICLE,
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
