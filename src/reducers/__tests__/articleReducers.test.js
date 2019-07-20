import articleReducer from '../articleReducers';
import { reducerTests } from '../../utils/testUtils';
import actionTypes from '../../actions/types';

const articleData = {
  id: 1,
  body: 'this is my body',
  title: 'Page Title',
  description: 'article description',
  slug: 'page-title_username',
};

const payload = {
  results: [articleData],
};

describe('articleReducer', () => {
  test('Undefined action returns created:true', () => {
    const newState = articleReducer(undefined, { type: '' });
    expect(newState.created).toBe(undefined);
  });

  test('GET_ALL_ARTICLES action returns created:true', () => {
    const newState = articleReducer('GET_ALL_ARTICLES', { type: 'GET_ALL_ARTICLES', payload });
    expect(newState.articles).toEqual([articleData]);
  });

  test('should test article actions returns with a single article altered', () => {
    reducerTests(actionTypes.CREATE_ARTICLE, articleData);
    reducerTests(actionTypes.EDIT_ARTICLE, articleData);
    reducerTests(actionTypes.GET_SINGLE_ARTICLES, articleData);
    reducerTests(actionTypes.DELETE_ARTICLE, {});
  });
});
