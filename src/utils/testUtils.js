import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers/index';

const mockStore = configureStore([thunk]);
const initialState = {
  beenLiked: false,
  article: {
    articles: [],
  },
};
const store = mockStore(initialState);

const hasAttributes = (wrapper, attributeValue) => (wrapper.find(`[data-test="${attributeValue}"]`));

export const componentRenders = (wrapper, attributeValue) => {
  const component = hasAttributes(wrapper, attributeValue);
  expect(component.length).toBe(1);
};

export const containerStore = (initialStateFull) => {
  const stateStore = applyMiddleware(thunk)(createStore);
  return stateStore(rootReducer, initialStateFull);
};

export default store;
