import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../home/Home';
import store from '../../../utils/testUtils';


describe('<Home /> component', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<Home store={store} />);
  });
  test('renders without crashing', () => {
    expect(wrapper).toMatchSnapshot();
  });
  test('renders skeleton loader', () => {
    wrapper = wrapper.dive().dive();
    expect(wrapper.find("[data-test='skeleton-loader']")).toHaveLength(1);
  });
  // test('renders articles', () => {
  //   const props = {
  //     articles: ['articles1', 'article2'],
  //     articleActions: jest.fn(),
  //   };
  //   const articlesWrapper = shallow(<Home
  //     store={store}
  //     articles="article"
  //     articleActions={props.articleActions}
  //   />);
  //   // wrapper = wrapper.dive().dive()
  //   // console.log(wrapper.debug());
  //   // wrapper.setProps({ articles: ['articles1', 'article2'] });
  //   console.log(articlesWrapper.props())
  //   expect(wrapper.find("[data-test='landing-articles']")).toHaveLength(1);
  //   expect(wrapper.find("[data-test='featured-articles']")).toHaveLength(1);
  // });
});
