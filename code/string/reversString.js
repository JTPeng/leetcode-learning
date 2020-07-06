// 1.字符串反转 如 the sky is blue ->输入结果 eht yks si eulb
export default (str) => {
  // 思路: 字符串 -> 数组 -> 遍历将每个元素拆分成单个数组再进行反转 -> 拼接
  return str
    .split(' ')
    .map((item) => item.split('').reverse().join(''))
    .join(' ')
}
