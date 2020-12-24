/**  搜索插入位置
 * 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。
 * 你可以假设数组中无重复元素
 * url:https://leetcode-cn.com/problems/search-insert-position/
 * 示例:
 * 输入: [1,3,5,6], 5
 * 输出: 2
 * 输入: [1,3,5,6], 2
 * 输出: 1
 * 输入: [1,3,5,6], 7
 * 输出: 4
 * 输入: [1,3,5,6], 0
 * 输出: 0
 */

// 二分查找
var searchInsert = function (nums, target) {
  let l = 0,
    len = nums.length,
    r = len - 1,
    res = len
  while (l <= r) {
    let mid = ((r - l) >> 1) + l
    if (target <= nums[mid]) {
      res = mid
      r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return res
}

var searchInsert = function (nums, target) {
  let start = 0
  let end = nums.length - 1
  while (start <= end) {
    const middle = Math.floor((end + start) / 2)
    if (nums[middle] === target) {
      return middle
    }
    if (nums[middle] < target) {
      start = middle + 1
      continue
    }
    if (nums[middle] > target) {
      end = middle - 1
      continue
    }
    return middle
  }
  return start
}
console.log(searchInsert([1, 3, 5, 6], 7))
