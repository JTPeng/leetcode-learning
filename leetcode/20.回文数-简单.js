/** 回文数
 * 判断一个整数是否是回文数。回文数是指正序（从左向右）和倒序（从右向左）读都是一样的整数。
 * 示例
 * 输入: 121
 * 输出: true
 *
 * 输入: -121
 * 输出: false
 * 解释: 从左向右读, 为 -121 。 从右向左读, 为 121- 。因此它不是一个回文数。
 *
 * 输入: 10
 * 输出: false
 * 解释: 从右向左读, 为 01 。因此它不是一个回文数。
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  var str = String(x)
  var L = 0
  var len = str.length
  var R = len - 1
  while (L < R) {
    if (str[L] !== str[R]) return false
    L++
    R--
  }
  return true
}

var isPalindrome = function (x) {
  return x === Number(x.toString().split('').reverse().join(''))
}
