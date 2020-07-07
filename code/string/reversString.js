// 1.字符串反转 如 the sky is blue ->输入结果 eht yks si eulb
// 方法一：
// export default (str) => {
//   // 思路: 字符串 -> 数组 -> 遍历将每个元素拆分成单个数组再进行反转 -> 拼接
//   return str
//     .split(' ')
//     .map((item) => item.split('').reverse().join(''))
//     .join(' ')
// }

// 方法二:使用正则
export default (str) => {
  // 思路: 字符串 -> 数组 -> 遍历将每个元素拆分成单个数组再进行反转 -> 拼接
  return str
    .split(/\s/g)
    .map((item) => item.split('').reverse().join(''))
    .join(' ');
};
// 方法三:  存在问题 => "vector<string> split (string s, char delimiter)" 解析错误
// export default (str) => {
//   // 思路: 字符串 -> 数组 -> 遍历将每个元素拆分成单个数组再进行反转 -> 拼接
//   return str
//     .match(/[\w']+/g)
//     .map((item) => item.split('').reverse().join(''))
//     .join(' ');
// };
