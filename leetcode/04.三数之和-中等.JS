/** 题目
 *  给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有满足条件且不重复的三元组。
 * 注意：答案中不可以包含重复的三元组。
 *
 * 示例
 * 给定数组 nums = [-1, 0, 1, 2, -1, -4]，
 * 满足要求的三元组集合为：
 * [
 * [-1, 0, 1],
 * [-1, -1, 2]
 * ]
 */

/**
 * @param {number[]} nums
 * @return {number[][]}
 * 思路:
 * 1.定义目标指针,快慢指针移动
 * 2.排序 / 去重
 * 2.边界值处理
 */
var threeSum = function (nums) {
  var arr = []
  var length = nums.length
  if (length < 3 || nums === null) return arr //
  nums.sort((a, b) => a - b) // 排序
  for (var i = 0; i < length; i++) {
    var target = nums[i] // 目标指针
    if (target > 0) break
    if (i > 0 && target === nums[i - 1]) continue // 去重
    var L = i + 1 // 左指针
    var R = length - 1 // 右指针
    while (L < R) {
      // 指针移动区间控制
      var sum = target + nums[L] + nums[R]
      // console.log(target, nums[L], nums[R])
      if (sum === 0) {
        arr.push([target, nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) L++ // 去重
        while (L < R && nums[R] === nums[R - 1]) R-- // 去重
        L++
        R--
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return arr
}
