/** 两个数组的交集2
 * url:https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/
 */

// 复杂度O(n)
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  const map = []
  const res = []
  // 记录出现次数
  for (const num of nums1) {
    if (map[num]) {
      // 及存在则累加
      map[num]++
    } else {
      map[num] = 1
    }
  }
  // nums1的数字是否在num2中出现过
  for (const num2 of nums2) {
    if (map[num2] > 0) {
      // 存在
      res.push(num2)
      map[num2]--
    }
  }
  return res
}

// 复杂度O(n)
var intersect = function (nums1, nums2) {
  const map = new Map()
  const result = []
  // 搜集出现的次数
  for (const num1 of nums1) {
    if (map.has(num1)) {
      map.set(num1, map.get(num1) + 1)
    } else {
      map.set(num1, 1)
    }
  }

  for (const num2 of nums2) {
    if (map.get(num2) && map.get(num2) > 0) {
      result.push(num2)
      map.set(num2, map.get(num2) - 1)
    }
  }
  return result
}
