import React from 'react';
import { shallow } from 'enzyme';

import AuthorHeadData from '../../articles/singlearticle/AuthorArticleData';

describe('<AuthorHeadData /> component', () => {
  const props = {
    articleData: {
      title: 'test title',
      description: 'test description',
    },
    articleActions: {},
  };
  const wrapper = shallow(
    <AuthorHeadData
      articleData={props.articleData}
      articleActions={props.articleActions}
    />,
  );

  test('AuthorHeadData renders correctly', () => {
    expect(wrapper.find("[data-test='author-data']")).toHaveLength(1);
  });
});
