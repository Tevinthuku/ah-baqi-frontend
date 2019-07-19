import articleActions from '../articleActions';
import store from '../../utils/testUtils';

describe('articleActions', () => {
  let actions;
  beforeAll(() => {
    actions = store.getActions();
  });
  test('Dispatches GET_SINGLE_ARTICLES', async () => {
    await store.dispatch(articleActions('get-one'));
    expect(actions).toContainEqual(
      { type: 'GET_SINGLE_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches GET_ALL_ARTICLES', async () => {
    await store.dispatch(articleActions('get-all'));
    expect(actions).toContainEqual(
      { type: 'GET_ALL_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches CREATE_ARTICLE', async () => {
    await store.dispatch(articleActions('create', '', '', {}));
    expect(actions).toContainEqual(
      expect.objectContaining(
        { type: 'CREATE_ARTICLE', payload: expect.anything() },
      ),
    );
  });
  test('Dispatches FETCH_USER_ARTICLES', async () => {
    await store.dispatch(articleActions('delete', ''));
    expect(actions).toContainEqual(
      { type: 'FETCH_USER_ARTICLES', payload: 'mocked' },
    );
  });
  test('Dispatches TOGGLE_LIKE', async () => {
    await store.dispatch(articleActions('like', ''));
    expect(localStorage.setItem).toHaveBeenCalled();
  });
});
