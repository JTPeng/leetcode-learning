// export default (str) => {};

let groupCard = (arr) => {
  arr.sort((a, b) => a - b);
  let min = Number.MAX_SAFE_INTEGER;
  let resArr = [];
  for (let i = 0, len = arr.length, temp = []; i < len; i++) {
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
  return resArr;
};
const array = [1, 2, 3, 4, 4, 3, 2, 1];
const res = groupCard(array);
console.log(res);
