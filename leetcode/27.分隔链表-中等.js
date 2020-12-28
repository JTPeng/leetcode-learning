/** 分割链表
 * 给定一个链表和一个特定值 x，对链表进行分隔，使得所有小于 x 的节点都在大于或等于 x 的节点之前。
 * 你应当保留两个分区中每个节点的初始相对位置。
 * 如:
 * 输入: head = 1->4->3->2->5->2, x = 3
 * 输出: 1->2->2->4->3->5
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
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  var before = new ListNode('0')
  var small = before
  var after = new ListNode('0')
  var big = after

  while (head !== null) {
    // 链表指向小值
    if (head.val < x) {
      small.next = head
      small = small.next
    } else {
      // 链表指向大值
      big.next = head
      big = big.next
    }
    head = head.next
  }
  big.next = null
  small.next = after.next // 合并2个链表
  return before.next
}
