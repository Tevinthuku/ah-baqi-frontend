import React from 'react';
import { shallow } from 'enzyme';

import NewArticleForm from '../../articles/NewArticleForm';

const myArticle = {
  slug: '',
  body: '',
}

describe('<NewArticleForm /> component', () => {
  const wrapper = shallow(<NewArticleForm article={myArticle} />);

  test('NewArticleForm renders correctly', () => {
    expect(wrapper.find("[data-test='new-article-form-component']")).toHaveLength(1);
  });
});
