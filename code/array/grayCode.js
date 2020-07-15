export default (n) => {
  let res = [0];
  let right = [];
  for (let i = 1; i < res.length; i++) {
    right = [...res].reverse().map((item) => item + Math.pow(2, i - 1));
    res = res.concat(right);
  }
  return res;
};

// 方法一
// function make(n) {
//   if (n === 0) {
//     return ['0'];
//   }
//   if (n === 1) {
//     return ['0', '1'];
//   } else {
//     let prev = make(n - 1);
//     let result = [];
//     let max = Math.pow(2, n) - 1;
//     for (let i = 0; i < prev.length; i++) {
//       result[i] = `0${prev[i]}`;
//       result[max - i] = `1${prev[i]}`;
//     }
//     return result;
//   }
// }
// var grayCode = function (n) {
//   let binaryArr = make(n);
//   return binaryArr.map((item) => parseInt(item, 2));
// };
// console.log(grayCode(3));
// console.log(make(3));

// 方法二
// function make1(n) {
//   if (n === 0) {
//     return ['0'];
//   }
//   if (n === 1) {
//     return ['0', '1'];
//   } else {
//     let prev = make(n - 1);
//     let result = [];
//     let max = Math.pow(2, n) - 1;
//     prev = prev.map((item) => '0' + item);
//     for (let i = 0; i < prev.length; i++) {
//       result.push(replace(prev[i]));
//     }
//     return prev.concat(result);
//   }
// }
// function replace(x) {
//   let res = x.split('');
//   let temp = '';
//   res.forEach((item) => {
//     if (item == 0) {
//       temp += '1';
//     }
//     if (item == 1) {
//       temp += '0';
//     }
//   });
//   return temp;
// }
// var grayCode1 = function (n) {
//   let binaryArr = make1(n);
//   return binaryArr.map((item) => parseInt(item, 2));
// };
// console.log(grayCode1(3));
// console.log(make1(3));

// 方法三
// n=1 -> [0,1] 2^1-1 ->
// n=2 -> [0,1,3,2] 2^2-1 [0,1] 反转 [1,0] 2^(n-1) [2^(2-1),]
// n=3 -> [0,1,3,2,6,7,5,4] 2^3-1

// var grayCode2 = function (n) {
//   var res = [0];
//   var right;
//   var i = 1;
//   for (; i <= n; i++) {
//     //
//     right = [...res].reverse().map((item) => item + Math.pow(2, i - 1));
//     res = res.concat(right);
//   }
//   return res;
// };
// console.log(grayCode2(3));
