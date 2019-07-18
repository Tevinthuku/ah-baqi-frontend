import { instance } from '../utils/axios';
import handleMessages from '../utils/messages';


export const addComment = (slug, value) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments`, value);
    handleMessages('success', 'Comment added Successfully');
  } catch (error) {
    handleMessages('error', 'Please login to add acomment');
  }
};


export const addNestedComment = (slug, value, id) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${id}/reply`, value);
    handleMessages('success', 'Comment added Successfully');
  } catch (error) {
    handleMessages('error', 'Please login to add acomment');
  }
};

export const deleteComment = (id, slug) => async (dispatch) => {
  try {
    instance.delete(`/articles/${slug}/comments/${id}`);
    handleMessages('success', 'Deleted Successfully');
  } catch (error) {
    handleMessages('error', 'Please try again');
  }
};

export const editCommentItem = (slug, id, value) => async (dispatch) => {
  try {
    instance.put(`/articles/${slug}/comments/${id}`, value);
    handleMessages('success', 'Comment edited');
  } catch (error) {
    handleMessages('error', 'Please try again');
  }
};

export const editNestedCommentItem = (slug, commentId, replyId, value) => async (dispatch) => {
  try {
    instance.put(`/articles/${slug}/comments/${commentId}/reply/${replyId}`, value);
    handleMessages('success', 'Comment edited');
  } catch (error) {
    handleMessages('error', 'Please try again');
  }
};

export const deleteNestedCommentItem = (slug, commentId, replyId) => async (dispatch) => {
  try {
    instance.delete(`/articles/${slug}/comments/${commentId}/reply/${replyId}`);
    handleMessages('success', 'Comment deleted');
  } catch (error) {
    handleMessages('error', 'try again');
  }
};


export const dislikeComment = (slug, commentId) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${commentId}/dislike`);
  } catch (error) {
    handleMessages('error', 'Please login to dislike this article');
  }
};

export const likeComment = (slug, commentId) => async (dispatch) => {
  try {
    await instance.post(`/articles/${slug}/comments/${commentId}/like`);
  } catch (error) {
    handleMessages('error', 'Please login to dislike this article');
  }
};
