import React from 'react';
import { shallow } from 'enzyme';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../../../reducers/index';
import CoomentContainer, { UnconnectedCoomentContainer } from '../../comments/Comments';

const configureStoreItem = (initialState) => {
  const store = applyMiddleware(thunk)(createStore);
  return store(rootReducer, initialState);
};

const setup = () => {
  const store = configureStoreItem();
  const wrapper = shallow(
    <CoomentContainer store={store} comments={[]} />,
  ).dive().dive();
  return wrapper;
};

describe('<CoomentContainer />', () => {
  test('renders without error', () => {
    const wrapper = setup();
    expect(wrapper.find("[data-test='comments-container']")).toHaveLength(1);
  });
  test('renders without error', () => {
    const wrapper = setup();
    const { addComment } = wrapper.instance().props;
    const { deleteComment } = wrapper.instance().props;
    expect(addComment).toBeInstanceOf(Function);
    expect(deleteComment).toBeInstanceOf(Function);
  });
  test('`getUserProfile` runs on Profile mount', () => {
    const handleSubmitMock = jest.fn();

    const props = {
      comments: [],
    };
    const wrapper = shallow(<UnconnectedCoomentContainer {...props} />);
    wrapper.instance().handleSubmit = handleSubmitMock;
    handleSubmitMock();
    expect(handleSubmitMock).toHaveBeenCalled();
  });
});
