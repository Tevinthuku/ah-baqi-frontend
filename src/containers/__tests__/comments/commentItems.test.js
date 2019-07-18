import { getItems } from '../../comments/commentNest/CommentItems';


describe('getItems', () => {
  test('renders without error', () => {
    expect(getItems).toBeInstanceOf(Function);
  });
});
