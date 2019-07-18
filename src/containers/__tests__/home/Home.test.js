import React from 'react';
import { shallow } from 'enzyme';

import Home from '../../home/Home';
import store from '../../../utils/testUtils';


describe('<Home /> component', () => {
  test('renders without crashing', () => {
    expect(shallow(<Home store={store} />)).toMatchSnapshot();
  });
});
