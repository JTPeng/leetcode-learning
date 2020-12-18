/** 环形链表2
 * url：https://leetcode-cn.com/problems/linked-list-cycle-ii/submissions/
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// 双指针 - 快慢指针
var detectCycle = function (head) {
  var slow = head
  var fast = head
  while (fast && fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
    // 快慢指针相遇
    if (slow === fast) {
      slow = head // 指针移回起点
      while (slow !== fast) {
        // 指针再次相遇时就是入环口
        slow = slow.next
        fast = fast.next
      }
      return slow
    }
  }
  return null
}

// 哈希表
// Map
var detectCycle = function (head) {
  var map = new Map()
  while (head !== null) {
    if (map.get(head) === head) {
      return head
    }
    map.set(head, head)
    head = head.next
  }
  return null
}
// Set
var detectCycle = function (head) {
  var set = new Set()
  while (head !== null) {
    if (set.has(head)) {
      return head
    }
    set.add(head)
    head = head.next
  }
  return null
}
