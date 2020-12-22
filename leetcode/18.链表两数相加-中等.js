/** 两数相加-链表
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * 示例:
 * 输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 * 输出：7 -> 0 -> 8
 * 原因：342 + 465 = 807
 */

var addTwoNumbers = function (l1, l2) {
  var sum = new ListNode(0)
  var head = sum
  var carry = 0
  while (l1 || l2 || carry) {
    var l1Res = l1 ? l1.val : 0 // 链表长度不一 用0取代
    var l2Res = l2 ? l2.val : 0 // 链表长度不一 甩0取代
    var res = l1Res + l2Res + carry
    carry = res > 9 ? 1 : 0 // 进位。下一位数是否需要加一
    sum.next = new ListNode(res % 10)
    sum = sum.next
    if (l1) l1 = l1.next
    if (l2) l2 = l2.next
  }
  return head.next
}

var addTwoNumbers = function (l1, l2) {
  var hair = new ListNode(0)
  var head = hair
  var carry = 0
  while (l1 || l2) {
    var sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
    carry = sum > 9 ? 1 : 0 // 是否需要进位
    head.next = new ListNode(sum % 10) // 取模赋值
    head = head.next // 移动指针
    // 移动指针
    l1 && (l1 = l1.next)
    l2 && (l2 = l2.next)
  }
  carry && (head.next = new ListNode(1))
  return hair.next
}
