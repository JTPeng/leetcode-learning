/**滑动窗口最大值
 * 给你一个zheng's数组 nums，有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧。你只可以看到在滑动窗口内的 k 个数字。滑动窗口每次只向右移动一位。
 * 返回滑动窗口中的最大值。
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/sliding-window-maximum
 * 著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 *
 * 示例
 * 输入：nums = [1,3,-1,-3,5,3,6,7], k = 3
 * 输出：[3,3,5,5,6,7]
 * 解释：
 * 滑动窗口的位置                最大值
 * ---------------               -----
 * [1  3  -1] -3  5  3  6  7       3
 * 1 [3  -1  -3] 5  3  6  7       3
 * 1  3 [-1  -3  5] 3  6  7       5
 * 1  3  -1 [-3  5  3] 6  7       5
 * 1  3  -1  -3 [5  3  6] 7       6
 * 1  3  -1  -3  5 [3  6  7]      7
 */
var maxSlidingWindow = function (nums, k) {
  const deque = [] //存放单调队列的下标
  const result = []
  for (let i = 0; i < nums.length; i++) {
    if (i - deque[0] >= k) deque.shift() //在滑动窗口之外的直接从队头删掉
    while (nums[deque[deque.length - 1]] <= nums[i]) {
      deque.pop() //如果新加进来的数比单调队列中原来的数都要大，则直接弹出队列中的其他数
    }
    deque.push(i)
    //数组下标从0开始，k=3时 ，下标为0，1，2的数组元素构成一个滑动窗口，所以条件为i>=k-1就可以将答案存入res中
    if (i >= k - 1) {
      result.push(nums[deque[0]])
    }
  }
  return result
}
console.log(maxSlidingWindow([1, 3, -1, -3, 5, 3, 6, 7], 3))
var maxSlidingWindow = function (nums, k) {
  const q = [] // 存储索引
  const res = []
  for (let i = 0; i < nums.length; i++) {
    while (q && nums[q[q.length - 1]] <= nums[i]) {
      q.pop()
    }
    q.push(i)
    // 第一个元素不在窗口中，则将其删除
    if (q[0] === i - k) {
      q.shift()
    }
    // 窗口中有k个元素添加到结果中（前k-1个窗口中有<k个元素，因为我们从空窗口开始并在每次迭代中添加1个元素）
    if (i >= k - 1) {
      res.push(nums[q[0]])
    }
  }
  return res
}
