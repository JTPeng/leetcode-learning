/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。如果不存在公共前缀，返回空字符串 ""。
 *
 * 输入: ["flower","flow","flight"]
 * 输出: "fl"
 *
 * 输入: ["dog","racecar","car"]
 * 输出: ""
 * 解释: 输入不存在公共前缀。
 */

/** 思路
 * 1.以第一个为目标
 * 2.将符合第一个字符串第一个字母条件的插入数组,都符合则递归。不符合则中断返回结果
 * 3.注意边界值处理
 */
var longestCommonPrefix = function (strs, index = 0) {
  if (strs.length === 0 || strs.every((item) => item === '')) {
    return ''
  }
  var target = strs[0][index]
  var result = []
  for (var val of strs) {
    result.push(val[index] || '')
  }
  if (result.every((item) => item === target && item !== undefined)) {
    index++
    target += longestCommonPrefix(strs, index)
  } else {
    target = ''
  }
  return target
}

/** 思路
 * 数组遍历,字符串遍历比较
 */
var longestCommonPrefix = function (strs) {
  if (strs === null || strs.length === 0) {
    return ''
  }
  var prev = strs[0]
  for (var i = 0; i < strs.length; i++) {
    let j = 0
    for (; j < prev.length && j < strs[i].length; j++) {
      if (prev.charAt(j) !== strs[i].charAt(j)) {
        // 目标字符与当前字符比较
        break
      }
    }
    prev = prev.substring(0, j) // 截取最长子串
  }
  return prev
}
