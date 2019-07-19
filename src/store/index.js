import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {loadState, saveState} from '../utils/localStorage';
import rootReducer from '../reducers';
import throttle from 'lodash';
const persistedState = loadState();

const store = createStore(rootReducer, persistedState, applyMiddleware(thunk));

store.subscribe(() => {
  saveState({
    state: store.getState()
  });
});

export default store;



