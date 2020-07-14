/**
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 如:输入 nums1 = [1,2,2,1], nums2 = [2,2] 输出 [2,2]
 */
export default (nums1, nums2) => {
  let map1 = countMap(nums1);
  let map2 = countMap(nums2);
  let res = [];
  for (let num of map1.keys()) {
    const count1 = map1.get(num);
    const count2 = map2.get(num);

    if (count2) {
      const pushCount = Math.min(count1, count2);
      for (let i = 0; i < pushCount; i++) {
        res.push(num);
      }
    }
  }
  function countMap(arr) {
    let map = new Map();
    for (let i = 0; i < arr.length; i++) {
      let num = arr[i];
      let count = map.get(num);
      if (count) {
        map.set(num, count + 1);
      } else {
        map.set(num, 1);
      }
    }
    return map;
  }
  return res;
};
