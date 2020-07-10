// 给定一副牌，每张牌上都写着一个整数。

// 此时，你需要选定一个数字 X，使我们可以将整副牌按下述规则分成 1 组或更多组：

// 每组都有 X 张牌。
// 组内所有的牌上都写着相同的整数。
// 仅当你可选的 X >= 2 时返回 true。

export default (arr) => {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let resArr = [];
  let result = true;
  for (let i = 0, len = arr.length, temp = []; i < len; i++) {
    temp.push(arr[i]);
    for (let j = i + 1; j < len - 1; j++) {
      if (arr[i] === arr[j]) {
        temp.push(arr[j]);
      } else {
        if (min > temp.length) {
          min = temp.length;
        }
        resArr.push([].concat(temp));
        temp.length = 0;
        i = j;
        break;
      }
    }
  }
  resArr.every((item) => {
    if (item.length % min !== 0) {
      result = false;
      return false;
    }
  });
  return result;
};
