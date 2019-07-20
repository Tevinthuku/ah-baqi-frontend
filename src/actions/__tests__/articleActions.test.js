import {
  getAllArticles, getAnArticle, createArticle, deleteArticle, toggleLike
} from '../articleActions';
import store from '../../utils/testUtils';

describe('articleActions', () => {
  let actions;
  beforeAll(() => {
    store.clearActions();
    actions = store.getActions();
  });
  test('Dispatches GET_SINGLE_ARTICLES', async () => {
    await store.dispatch(getAnArticle());
    expect(actions).toContainEqual(
      { type: 'GET_SINGLE_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches GET_ALL_ARTICLES', async () => {
    await store.dispatch(getAllArticles());
    expect(actions).toContainEqual(
      { type: 'GET_ALL_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches CREATE_ARTICLE', async () => {
    await store.dispatch(createArticle({}));
    expect(actions).toContainEqual(
      expect.objectContaining(
        { type: 'CREATE_ARTICLE', payload: expect.anything() },
      ),
    );
  });
  test('Dispatches FETCH_USER_ARTICLES', async () => {
    await store.dispatch(deleteArticle());
    expect(actions).toContainEqual(
      { type: 'FETCH_USER_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches TOGGLE_LIKE', async () => {
    await store.dispatch(toggleLike());
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
