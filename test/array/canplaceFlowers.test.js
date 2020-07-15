import canplaceFlowers from '../../code/array/canplaceFlowers.js'
test('canplaceFlowers.test:[1, 0, 0, 0, 1], 2', () => {
  expect(canplaceFlowers([1, 0, 0, 0, 1], 2)).toBe(false);
});

test('canplaceFlowers.test:[1, 0, 0, 0, 1], 1', () => {
  expect(canplaceFlowers([1, 0, 0, 0, 1], 1)).toBe(true);
});
