import customSort from '../task1';


test('should correctly reverse array but keep special characters in place', () => {
    const input = ['n', 2, '&', 'a', 'l', 9, '$', 'q', 47, 'i', 'a', 'j', 'b', 'z', '%', 8];
    const output = [8, 'z', '&', 'b', 'j', 'a', '$', 'i', 47, 'q', 9, 'l', 'a', 2, '%', 'n'];
  expect(customSort(input)).toEqual(output);
});