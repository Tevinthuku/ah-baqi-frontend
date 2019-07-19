import { instance, baseAxios } from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

const articleActions = (action, slug = '', history = null, data = {}) => async (dispatch) => {
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
        handleMessages('loading', 'Deleting article...');
        await instance.delete(`/articles/${slug}/`, data);
        const userId = localStorage.getItem('user_id');
        response = await instance.get(`/user_articles/${userId}/`);
        dispatch({
          type: actionTypes.FETCH_USER_ARTICLES,
          payload: response.data,
        });
        history.push('/profile');
        handleMessages('success', 'Article successfully deleted 😄');
      } catch (error) {
        handleMessages('error', 'Failed 😬');
      }
      break;
    case 'create':
      try {
        handleMessages('loading', 'Your post is being uploaded... ??');
        response = await instance.post(
          '/articles/',
          { article: data },
        );
        dispatch({
          type: actionTypes.CREATE_ARTICLE,
          payload: response.data,
        });
        handleMessages('success', 'Your article was successfully created ??');
        history.push(`/articles/${response.data.slug}`);
      } catch (error) {
        handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
      }
      break;

    case 'get-one':
      try {
        response = await baseAxios.get(
          `/articles/${slug}/`,
        );

        dispatch({
          type: actionTypes.GET_SINGLE_ARTICLES,
          payload: response.data,
        });
      } catch (error) {
        handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
      }
      break;

    case 'get-all':
      try {
        response = await baseAxios.get(
          '/articles/feed/',
        );
        dispatch({
          type: actionTypes.GET_ALL_ARTICLES,
          payload: response.data,
        });
      } catch (error) {
        handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
      }
      break;
    case 'like':
      try {
        const response = await baseAxios.post(
          `/articles/${slug}/like`,
        );
        const beenLiked = response.data.reaction.data.article_liked
        dispatch({
          type: actionTypes.TOGGLE_LIKE,
          payload: beenLiked,
        });
        try {
          const response = await baseAxios.get(
            `/articles/${slug}/`,
          );
          dispatch({
            type: actionTypes.GET_SINGLE_ARTICLES,
            payload: response.data,
          });
        } catch (error) {
          handleMessages('error', 'Oops!! 🤭 , an error occured, please try again');
        }
        if (beenLiked) {
          handleMessages('success', 'Article liked!')
        } else {
          handleMessages('success', 'Article disliked!')
        }

      } catch (error) {
        console.log(error.message),
          /403/.test(error.message)
            ? handleMessages('error', 'You must be logged in to like')
            : handleMessages('error', 'Oops! An error occurred');
      }
      break;
    default:
      break;
  }
};

export default articleActions;
