import { getNestedItems } from '../../comments/commentNest/SecondaryCommentItems';


describe('<getNestedItems />', () => {
  test('renders without error', () => {
    expect(getNestedItems).toBeInstanceOf(Function);
  });
});
