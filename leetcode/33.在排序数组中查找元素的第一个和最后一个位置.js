/** 在排序数组中查找元素的第一个和最后一个位置
 * url:https://leetcode-cn.com/problems/find-first-and-last-position-of-element-in-sorted-array/
 * 给定一个按照升序排列的整数数组 nums，和一个目标值 target。找出给定目标值在数组中的开始位置和结束位置。
 * 如果数组中不存在目标值 target，返回 [-1, -1]。
 * 示例 1：
 * 输入：nums = [5,7,7,8,8,10], target = 8
 * 输出：[3,4]
 * 示例 2：
 * 输入：nums = [5,7,7,8,8,10], target = 6
 * 输出：[-1,-1]
 * 示例 3：
 * 输入：nums = [], target = 0
 * 输出：[-1,-1]
 */
//
var searchRange = function (nums, target) {
  if (nums.length === 0) return [-1, -1]
  var left = 0
  var right = nums.length - 1
  var result = []
  while (left <= right) {
    if (nums[left] === target) result.push(left)
    if (nums[right] === target) result.push(right)
    left++
    right--
  }
  if (result.length === 0) {
    return [-1, -1]
  }
  result.sort((a, b) => a - b)
  return [result[0], result[result.length - 1]]
}
