/** 实现 strStr()
 * 给定一个 haystack 字符串和一个 needle 字符串，在 haystack 字符串中找出 needle 字符串出现的第一个位置 (从0开始)。如果不存在，则返回  -1。
 * 示例:
 * 输入: haystack = "hello", needle = "ll"
 * 输出: 2
 * 输入: haystack = "aaaaa", needle = "bba"
 * 输出: -1
 */
var strStr = function (haystack, needle) {
  if (!needle) return 0
  let L = 0
  let R = L + needle.length
  var getStr = (left, right) => {
    var res = ''
    while (left < right) {
      res += haystack[left]
      left++
    }
    return res
  }
  while (L < R && R <= haystack.length) {
    if (getStr(L, R) === needle) {
      return L
    }
    L++
    R++
  }
  return -1
}

var strStr = function (haystack, needle) {
  if (!needle) return 0
  let L = 0
  let R = L + needle.length
  while (L < R && R <= haystack.length) {
    if (haystack.slice(L, R) === needle) {
      return L
    }
    L++
    R++
  }
  return -1
}
