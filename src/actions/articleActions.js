import { instance, baseAxios } from '../utils/axios';
import handleMessages from '../utils/messages';

import actionTypes from './types';

const articleActions = (action, slug = "", data = "") => async (dispatch) => {
    let response;
    switch (action) {
        case 'edit':
            try {
                response = await instance.put(`/articles/${slug}`, data);
                dispatch({
                    type: actionTypes.EDIT_ARTICLE,
                    payload: response.data,
                });
                handleMessages('success', 'Article successfully edited ??');
            } catch (error) {
                handleMessages('error', 'Failed ??');
            }
            break;
        case 'delete':
            try {
                response = await instance.delete(`/articles/${slug}`, data);
                dispatch({
                    type: actionTypes.DELETE_ARTICLE,
                    payload: response.data,
                });
                handleMessages('success', 'Article successfully deleted ??');
            } catch (error) {
                handleMessages('error', 'Failed ??');
            }
            break;
        case 'create':
            try {
                handleMessages('loading', 'Your post is being uploaded... ??');
                const response = await instance.post(
                    '/articles/',
                    { article: data },
                );

                dispatch({
                    type: actionTypes.CREATE_ARTICLE,
                    payload: response.data,
                });
                handleMessages('success', 'Your article was successfully created ??');
            } catch (error) {
                handleMessages('error', 'Oops!! ?? , an error occured, please try again');
            }
            break;

        case 'get-one':
            try {
                const response = await baseAxios.get(
                    `/articles/${slug}/`,
                );

                console.log(response.data)

                dispatch({
                    type: actionTypes.GET_SINGLE_ARTICLES,
                    payload: response.data,
                });
            } catch (error) {
                handleMessages('error', 'Oops!! ?? , an error occured, please try again');
            }
            break;

        case 'get-all':
            try {
                const response = await baseAxios.get(
                    '/articles/feed/',
                );
                dispatch({
                    type: actionTypes.GET_ALL_ARTICLES,
                    payload: response.data,
                });
            } catch (error) {
                handleMessages('error', 'Oops!! ?? , an error occured, please try again');
            }
            break;
        default:
            return {};
    }
};

export default articleActions;
