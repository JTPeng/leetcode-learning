/** 电话号码的字母组合
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。
 * 示例:
 *  输入："23"
 *  输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].
 */

var letterCombinations = function (digits) {
  if (digits.includes('0') || digits.includes('1')) return
  const letter = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }
  const transform = []
  const len = digits.length
  const dfs = (prevStr, l) => {
    // prevStr是当前字符串，l是扫描的指针
    if (l > len - 1) {
      // 指针越界，递归的出口
      transform.push(prevStr) //  将解推入transform
      return // 结束当前递归分支，进入另一个递归分支
    }
    const target = letter[digits[l]] // 当前数字对应有哪些字母
    for (cur of target) {
      // 不同的字母选择代表不同的递归分支
      dfs(cur + prevStr, l + 1) // 生成新字符串，i指针右移，递归
    }
  }
  dfs('', 0) // 递归的入口，初始字符串为''，指针为0
  return transform
}
console.log(letterCombinations('234'))
