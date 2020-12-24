/**. 验证回文串
 * 给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。
 * 说明：本题中，我们将空字符串定义为有效的回文串。、
 * 示例:
 * 输入: "A man, a plan, a canal: Panama"
 * 输出: true
 * 输入: "race a car"
 * 输出: false
 */
var isPalindrome = function (s) {
  s = s.toLocaleLowerCase()
  let l = 0,
    r = s.length - 1
  // 非字母数字判断
  const isValid = (str) => {
    return str.match(/[A-Za-z0-9]+/g)
    // return (str >= "a" && str <= "z") || (str >= "A" && str <= "Z") || (str >= "0" && str <= "9")
  }
  while (l < r) {
    if (!isValid(s[l])) {
      l++
      continue
    }
    if (!isValid(s[r])) {
      r--
      continue
    }
    if (s[l] !== s[r]) return false
    l++
    r--
  }
  return true
}
