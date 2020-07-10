import groupsSize from '../../code/array/groupsSize.js';

test('groupsSize:[1, 2, 3, 4, 4, 3, 2, 1]', () => {
  expect(groupsSize([1, 2, 3, 4, 4, 3, 2, 1])).toBe(true);
});

test('groupsSize:[1,1,1,2,2,2,3,3]', () => {
  expect(groupsSize([1, 1, 1, 2, 2, 2, 3, 3])).toBe(false);
});
