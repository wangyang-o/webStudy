/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月13日 14:10:06
 * @LastEditors: wy
 * @LastEditTime: 2021年03月13日 14:11:57
 */
// 题目：
// 输入两个链表，找出它们的第一个公共节点。
// 思路：双指针
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let h1 = headA;
    let h2 = headB;
    while (h1 != h2) {
        h1 = h1 == null ? headB : h1.next;
        h2 = h2 == null ? headA : h2.next;
    }
    return h1;
};