/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月01日 13:57:12
 * @LastEditors: wy
 * @LastEditTime: 2021年03月01日 13:58:16
 */
// 题目：输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。
//

// 思路：unshift
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
    const res = [];
    while (head) {
        res.unshift(head.val);
        head = head.next;
    }
    return res;
};