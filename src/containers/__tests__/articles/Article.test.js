import React from 'react';
import { shallow } from 'enzyme';
import { containerStore } from '../../../utils/testUtils';
import ArticlePage from '../../articles/Article';

const articleData = {
  id: 1,
  slug: 'fake_slug_username',
  title: 'Fake Title',
  description: 'some description',
  body: 'the body is a long description of the article',
};

const initialSetup = (props) => {
  const store = containerStore();
  const wrapper = shallow(
    <ArticlePage store={store} {...props} />,
  ).dive().dive();
  return wrapper;
};

const unconnectedWrapper = initialSetup({});

describe('<ArticlePage /> component renders successfully', () => {
  test('should test if ArtcleData id is zero at initial state', () => {
    const initialArticleData = unconnectedWrapper.instance().props.articleData.id;
    expect(initialArticleData).toBe(0);
  });
});
