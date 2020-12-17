/**.反转一个链表
 * 如:
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 关键：
 *  将当前节点的指针指向上一个节点
 *  然后更新当前节点和下一个节点的值即顺移
 * 技巧:
 *  设置哨兵节点 null，初始化时将head节点指向null，下一步将next指向head
 *  重复以上动作直到当前节点为尾节点的节点null
 */
var reverseList = function (head) {
  var prev = null
  var curr = head
  while (curr !== null) {
    var next = curr.next // 缓存指向下一个指的指针
    curr.next = prev // 修改当前指针
    prev = curr // 前一个值为当前值
    curr = next // 当前值为下一个指针的值
  }
  return prev
}
