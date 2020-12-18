/** 旋转数组
 * 给定一个数组，将数组中的元素向右移动 k 个位置，其中 k 是非负数。
 * url：https://leetcode-cn.com/problems/rotate-array/
 * 示例:
 * 输入: [1,2,3,4,5,6,7] 和 k = 3
 * 输出: [5,6,7,1,2,3,4]
 * 解释:
 * 向右旋转 1 步: [7,1,2,3,4,5,6]
 * 向右旋转 2 步: [6,7,1,2,3,4,5]
 * 向右旋转 3 步: [5,6,7,1,2,3,4]
 */

// 分步转换
var rotate = function (nums, k) {
  // 如果k大于nums.length，则完成一个循环，这意味着它将保持不变，并且我们必须进行剩余移位
  k %= nums.length
  let reverse = function (i, j) {
    while (i < j) {
      let temp = nums[i]
      nums[i] = nums[j]
      nums[j] = temp
      i++
      j--
    }
  }
  reverse(0, nums.length - 1) // 整个反转  [7,6,5,4,3,2,1]
  reverse(0, k - 1) // // 反转前半部分 [5,6,7,4,3,2,1]
  reverse(k, nums.length - 1) // 反转后半部分 [5, 6, 7, 1, 2, 3, 4]
  return nums
}

var rotate = function (nums, k) {
  for (var i = 0; i < k; i++) {
    nums.unshift(nums.pop())
  }
  return nums
}
