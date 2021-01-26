/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月21日 23:03:25
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 14:43:12
 */
// 题目：
// 输入一个链表， 输出该链表中倒数第k个节点。 为了符合大多数人的习惯，
// 本题从1开始计数， 即链表的尾节点是倒数第1个节点。
// 例如， 一个链表有6个节点， 从头节点开始，
// 它们的值依次是1、 2、 3、 4、 5、 6。 这个链表的倒数第3个节点是值为4的节点。

// 思路： 
// 快指针先走k步， 之后快慢指针一起走， 快指针为null时候， 则慢指针为倒数第k个节点（ n - k个节点）

//  Definition for singly-linked list.
function ListNode(val) {
      this.val = val;
      this.next = null;
}
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
      let fast = head;
      let slow = head;
      for (let i = 0; i < k; i++) {
            fast = fast.next;
      }
      while (fast) {
            fast = fast.next;
            slow = slow.next;
      }
      return slow;
};