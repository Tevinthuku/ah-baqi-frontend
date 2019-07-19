import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';

const mockStore = configureStore([thunk]);
const initialState = {
  article: {
    articles: [],
  },
};
const store = mockStore(initialState);

export default store;
