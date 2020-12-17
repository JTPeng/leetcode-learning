/** 爬楼梯 -> 经典动态规划提
 * 描述:假设你正在爬楼梯。需要 n 阶你才能到达楼顶。每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？
 * 注意：给定 n 是一个正整数。
 *
 * 如:输入： 2
 * 输出： 2
 * 解释： 有两种方法可以爬到楼顶。
 * 1.  1 阶 + 1 阶
 * 2.  2 阶
 *
 *
 * 方法一：递归 -> 时间o(n^2) 空间o(n)
 * 方法二: 记忆化递归 -> 去除重复的计算 时间o(n) 空间o(n)
 * 方法三: 动态规划 -> 时间o(n) 空间o(n)
 */

//
/** 动态规划:常规解法可以分成多个子问题，爬第n阶楼梯的方法数量，等于 2 部分之和
 * 1.爬上 n-1n−1 阶楼梯的方法数量。因为再爬1阶就能到第n阶
 * 2.爬上 n-2n−2 阶楼梯的方法数量，因为再爬2阶就能到第n阶
 * */
var climbStairs = function (n) {
  if (n <= 2) return n
  var arr = []
  arr[1] = 1
  arr[2] = 2
  for (let i = 3; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[n]
}
console.log(climbStairs(10))

// 递归
var climbStairs = function (n) {
  if (n <= 2) return n
  return climbStairs(n - 1) + climbStairs(n - 2)
}
