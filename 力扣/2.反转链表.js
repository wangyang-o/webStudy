/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月22日 21:26:45
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 15:23:42
 */

// 题目：
// 定义一个函数， 输入一个链表的头节点， 反转该链表并输出反转后链表的头节点。。

// 思路:
// 快慢指针,pre上一个节点,中间变量next保存当前节点的下一个节点cur.next；
// 再将当前节点的下一个节点指向上一个节点， 循环反转， 直到cur为null。最后返回pre（头节点）
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
var reverseList = function (head) {
    let pre = null;
    let cur = head;
    while (cur) {
        let next = cur.next;
        cur.next = pre;
        pre = cur;
        cur = next;
    }
    return pre;
};