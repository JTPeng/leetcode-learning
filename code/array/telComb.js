/**
 * 题目：电话号码的字母组合
 * 描述: 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合
 * 示例: 输入："23"
 *       输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"]
 * 可任意选择输出顺序
 */

export default (str) => {
  // 1.电话号码的映射
  let codeNum = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  let num = str.split('');
  // 2.保存输入字符串映射后的内容 如 23 => ['abc','def]
  let code = [];
  num.map((item) => {
    codeNum[item] && code.push(codeNum[item]);
  });
  let comb = (arr) => {
    let temp = [];
    for (let i = 0; i < arr[0].length; i++) {
      for (let j = 0; j < arr[1].length; j++) {
        temp.push(`${arr[0][i]}${arr[1][j]}`);
      }
    }
    arr.splice(0, 2, temp);
    if (arr.length > 1) {
      comb(arr);
    } else {
      return temp;
    }
    return arr[0];
  };
  return comb(code);
};
// function combres(str) {
//   // 1.电话号码的映射
//   let codeNum = ['', 1, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
//   let num = str.split('');
//   // 2.保存输入字符串映射后的内容 如 23 => ['abc','def]
//   let code = [];
//   num.map((item) => {
//     codeNum[item] && code.push(codeNum[item]);
//   });
//   const comb = (arr) => {
//     let temp = [];
//     for (let i = 0; i < arr[0].length; i++) {
//       for (let j = 0; j < arr[1].length; j++) {
//         temp.push(`${arr[0][i]}${arr[1][j]}`);
//       }
//     }
//     arr.splice(0, 2, temp);
//     // console.log(arr)
//     if (arr.length > 1) {
//       comb(arr);
//     } else {
//       console.log(temp);
//       return temp;
//     }
//   };
//   comb(code);
// }
// console.log(combres('234'));
