/** 删除链表的倒数第N个节点
 * url:https://leetcode-cn.com/problems/remove-nth-node-from-end-of-list/
 * 给定一个链表，删除链表的倒数第 n 个节点，并且返回链表的头结点。
 * 示例：
 * 给定一个链表: 1->2->3->4->5, 和 n = 2.
 * 当删除了倒数第二个节点后，链表变为 1->2->3->5
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  var hair = new ListNode(null)
  hair.next = head
  var fast = hair
  var slow = hair

  for (var i = 0; i < n + 1; i++) fast = fast.next // 快指针先走n步
  // 快慢指针再一起走
  while (fast !== null) {
    slow = slow.next
    fast = fast.next
  }
  slow.next = slow.next.next
  return hair.next
}
