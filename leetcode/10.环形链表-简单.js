/** 环形链表
 * url:https://leetcode-cn.com/problems/linked-list-cycle/submissions/
 */

// 污染链表
var hasCycle = function (head) {
  while (head) {
    if (head.target) {
      return true
    } else {
      head.target = true
    }
    head = head.next
  }
  return false
}

// 双指针 (快慢指针)

var hasCycle = function (head) {
  // 环形链表至少有2个值
  if (!head || !head.next) return false
  var slow = head
  var fast = head.next
  while (slow !== fast) {
    // 没有环。则快指针会到达终点
    if (!fast || !fast.next) {
      return false
    }
    slow = slow.next // 走一步
    fast = fast.next.next // 走两步
  }
  return true
}
