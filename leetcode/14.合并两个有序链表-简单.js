/** 合并两个有序链表
 * url:https://leetcode-cn.com/problems/merge-two-sorted-lists/
 * 示例:
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// 递归
var mergeTwoLists = function (l1, l2) {
  if (!l1) {
    return l2 // l1 或者l2总有一个先递归完,所以需要返回另一个
  } else if (!l2) {
    return l1
  } else if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
}

// 迭代
var mergeTwoLists = function (l1, l2) {
  var hair = new ListNode(0)
  var prev = hair
  while (l1 && l2) {
    if (l1.val <= l2.val) {
      prev.next = l1
      l1 = l1.next
    } else {
      prev.next = l2
      l2 = l2.next
    }
    prev = prev.next
  }
  prev.next = l1 ? l1 : l2
  return hair.next
}
