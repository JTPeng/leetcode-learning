/** 两个数组的交集
 * url：https://leetcode-cn.com/problems/intersection-of-two-arrays/
 * 给定两个数组，编写一个函数来计算它们的交集。
 * 示例 1：
 * 输入：nums1 = [1,2,2,1], nums2 = [2,2]
 * 输出：[2]
 * 示例 2：
 * 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
 * 输出：[9,4]
 */

// 复杂度O(n)
var intersection = function (nums1, nums2) {
  let result = []
  let set1 = new Set(nums1)
  let set2 = new Set(nums2)

  let [smallSet, largeSet] = set1.size < set2.size ? [set1, set2] : [set2, set1]

  for (let nums of smallSet) largeSet.has(nums) && result.push(nums)
  return result
}
