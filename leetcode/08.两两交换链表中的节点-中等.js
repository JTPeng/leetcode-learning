/**两两交换链表中的节点
 * 地址：https://leetcode-cn.com/problems/swap-nodes-in-pairs/
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  var zero = new ListNode(0)
  zero.next = head // 与链表连接
  var prev = zero
  while (head && head.next) {
    var next = head.next // 缓存当前指针的下一个值

    head.next = next.next // 指向下下一个
    next.next = head
    prev.next = next // 位置互换完成

    prev = head // 指针移动
    head = head.next // 指针移动
  }
  return zero.next
}
