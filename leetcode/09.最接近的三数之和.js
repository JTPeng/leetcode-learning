/** 最接近的三数之和
 * url: https://leetcode-cn.com/problems/3sum-closest/submissions/
 */

var nums = [0, 2, 1, -3] // 0 2 1 / 0 2 -3 / 2 1 -3
var target = 1
var threeSumClosest = function (nums, target) {
  nums = nums.sort((a, b) => a - b)
  var len = nums.length - 1
  var res = nums[0] + nums[1] + nums[len]
  for (var i = 0; i < len; i++) {
    var aims = nums[i] // 目标指针
    var L = i + 1 // 左指针
    var R = len // 右指针
    while (L < R) {
      var sum = aims + nums[L] + nums[R]
      if (sum <= target) L++
      else R--
      if (Math.abs(sum - target) <= Math.abs(res - target)) {
        console.log(res, sum)
        res = sum
      }
    }
  }
  return res
}
threeSumClosest(nums, target)
