/** 题目:盛最多水的容器
 *  描述: 给你 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0) 。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
 *
 * 如:
 *  输入：[1,8,6,2,5,4,8,3,7]
 *  输出：49
 *  输入：height = [4,3,2,1,4]
 *  输出：16
 *
 * 难点: 如何移动指针
 *  相同情况下两边距离越远越好
 *  区域受限于最短边
 *
 * 暴力求解:遍历左右边,找出所有面值,取最大值 -> 时间复杂度0(n^2) 空间复杂度O(1)
 */
var maxArea = function (height) {
  var len = height.length
  var maxHeight = 3 * 10 ** 4
  if (height < 2 || height > maxHeight) return ''
  var L = 0
  var R = len - 1
  var result = 0
  while (L < R) {
    if (height[L] < 0 || height[R] < 0) return ''
    if (height[L] > maxHeight || height[R] > maxHeight) return ''
    var area = Math.min(height[R], height[L]) * (R - L)
    result = Math.max(area, result)
    // 右大于左 移左指针
    if (height[R] >= height[L]) {
      L++
    } else {
      // 移右指针
      R--
    }
  }
  return result
}
var height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
maxArea(height)
