/** 删除排序数组中的重复项
 * url: https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/
 *
 * 描述:
 *  给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
 *  不要使用额外的数组空间，你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。
 * 如:给定数组 nums = [0,0,1,1,1,2,2,3,3,4],
 * 函数应该返回新的长度 5, 并且原数组 nums 的前五个元素被修改为 0, 1, 2, 3, 4。
 * 你不需要考虑数组中超出新长度后面的元素。
 *
 * 注意审题:不需要考虑原数组变成什么样,注意看例子
 */
var nums = [1, 1, 2] // => 最终nums变成 [1,2,2]
var removeDuplicates = function (nums) {
  var k = 0
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[k]) {
      k++
      nums[k] = nums[i]
    }
  }
  return k + 1
}
