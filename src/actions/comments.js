import { instance } from '../utils/axios';
import articleActions from './articleActions';
import handleMessages from '../utils/messages';


export const addComment = (slug, value) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments`, value);
    dispatch(articleActions('get-one', slug));
    handleMessages('success', 'Comment added Successfully');
  } catch (error) {
    handleMessages('error', 'Please login to add acomment');
  }
};

export const addNestedComment = (slug, value, id) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${id}/reply`, value);
    handleMessages('success', 'Comment added Successfully');
    dispatch(articleActions('get-one', slug));
  } catch (error) {
    handleMessages('error', 'Please login to add acomment');
  }
};

export const deleteComment = (id, slug) => async (dispatch) => {
  try {
    await instance.delete(`/articles/${slug}/comments/${id}`);
    dispatch(articleActions('get-one', slug));
    handleMessages('success', 'Deleted Successfully');
  } catch { // no-action
  }
};

export const editCommentItem = (slug, id, value) => async (dispatch) => {
  try {
    await instance.put(`/articles/${slug}/comments/${id}`, value);
    handleMessages('success', 'Comment edited');
    dispatch(articleActions('get-one', slug));
  } catch { // no-action
  }
};

export const editNestedCommentItem = (slug, commentId, replyId, value) => async (dispatch) => {
  try {
    await instance.put(`/articles/${slug}/comments/${commentId}/reply/${replyId}`, value);
    handleMessages('success', 'Comment edited');
    dispatch(articleActions('get-one', slug));
  } catch { // no-action
  }
};

export const deleteNestedCommentItem = (slug, commentId, replyId) => async (dispatch) => {
  try {
    await instance.delete(`/articles/${slug}/comments/${commentId}/reply/${replyId}`);
    handleMessages('success', 'Comment deleted');
    dispatch(articleActions('get-one', slug));
  } catch { // no-action
  }
};

export const dislikeComment = (slug, commentId) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${commentId}/dislike`);
    dispatch(articleActions('get-one', slug));
  } catch (error) {
    handleMessages('error', 'Please login to dislike this article');
  }
};

export const likeComment = (slug, commentId) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${commentId}/like`);
    dispatch(articleActions('get-one', slug));
  } catch (error) {
    handleMessages('error', 'Please login to dislike this article');
  }
};
