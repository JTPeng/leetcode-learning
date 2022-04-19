/**
 * 力扣题:两数之和
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。你可以假设每种输入只会对应一个答案。但是，数组中同一个元素不能使用两遍。
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 *
 * 解题思路：
 * 1.将相减结果下标保存到对象中,下一次相见时对象含有该值则结束循环
 */
var twoSum = function (nums, target) {
	var obj = {}
	for (let i = 0; i < nums.length; i++) {
		const num = target - nums[i]
		if (obj.hasOwnProperty(num)) {
			return [i, obj[num]]
		}
		obj[nums[i]] = i
	}
	return null
}

// 快慢指针实现
var twoSum = function (nums, target) {
	var length = nums.length
	var left = 0
	var right = length - 1
	while (left < right) {
		if (nums[left] + nums[right] === target) {
			return [left, right]
		}
		right--
		if (left === right) {
			left++
			right = length - 1
		}
	}
}

/**
 * 哈希值
 * @param {*} nums
 * @param {*} target
 * @returns
 */
var twoSum = function (nums, target) {
	var map = {}
	for (let i = 0; i < nums.length; i++) {
		const num = target - nums[i]
		if (map.hasOwnProperty(num)) {
			return [map[num], i]
		}
		map[nums[i]] = i
	}
	return null
}
