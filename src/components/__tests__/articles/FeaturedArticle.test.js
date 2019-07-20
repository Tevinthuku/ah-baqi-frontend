import React from 'react';
import { shallow } from 'enzyme';

import SingleFeaturedArticle from '../../articles/featured/FeaturedArticle';

describe('<SingleFeaturedArticle /> component', () => {
  const props = {
    article: {
      title: 'test title',
      description: 'test description',
    },
    clicked: jest.fn(),
  };
  const wrapper = shallow(
    <SingleFeaturedArticle
      article={props.article}
      clicked={props.clicked}
    />,
  );

  test('SingleFeaturedArticle renders correctly', () => {
    expect(wrapper.find("[data-test='single-featured-article']")).toHaveLength(1);
  });
  // test('Calls function onClick', () => {
  //   // const toClick = wrapper.find("[data-test='single-featured-article']")
  //   wrapper.find("[data-test='single-featured-article']").simulate('click');
  //   console.log(wrapper.props())
  //   const ClickSpy = jest.spyOn(wrapper.props, 'clicked');
  //   expect(ClickSpy).toHaveBeenCalled();
  // });
});
