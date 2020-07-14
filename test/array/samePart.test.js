import samePart from '../../code/array/samePart.js';

test('samePart([1, 2, 2, 1, 3], [2, 3])', () => {
  expect(samePart([1, 2, 2, 1, 3], [2, 3])).toEqual([2, 3]);
});

test('samePart([1, 2, 2, 1, 3, 4, 5, 1, 2], [2, 3])', () => {
  expect(samePart([1, 2, 2, 1, 3, 4, 5, 1, 2], [2, 3, 1, 5, 8, 9])).toEqual([1, 2, 3, 5]);
});
