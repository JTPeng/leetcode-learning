/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 * @description 假设你有一个很长的花坛，一部分地块种植了花，另一部分却没有。可是，花卉不能种植在相邻的地块上，它们会争夺水源，两者都会死去。给定一个花坛（表示为一个数组包含0和1，其中0表示没种植花，1表示种植了花），和一个数 n 。能否在不打破种植规则的情况下种入 n 朵花？能则返回True，不能则返回False。
 * @example 输入 lowerbed = [1,0,0,0,1], n = 1 输出 true
 */

export default (flowerbed, n) => {
  var num = 0;
  for (var i = 0, length = flowerbed.length; i < length; i++) {
    if (flowerbed[i] === 0 && flowerbed[i - 1] !== 1 && flowerbed[i + 1] !== 1) {
      num++;
      i++; // 当前位置能种花时,指针往下移动一位
    }
  }
  return n <= num;
};
// var canPlaceFlowers = function (flowerbed, n) {
//   return (
//     n <=
//     ('0' + flowerbed.join('') + '0')
//       .split(/1+/)
//       .reduce((a, c) => a + Math.floor((c.length - 1) / 2), 0)
//   );
// };

// var re = canPlaceFlowers([1, 0, 0, 0, 1], 2);
// console.log(re);
