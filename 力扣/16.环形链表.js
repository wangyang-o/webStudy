/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年02月07日 15:16:29
 */
// 题目：
// 给定一个链表，判断链表中是否有环。
// 如果链表中有某个节点， 可以通过连续跟踪 next 指针再次到达， 则链表中存在环。 为了表示给定链表中的环， 我们使用整数 pos 来表示链表尾连接到链表中的位置（ 索引从 0 开始）。 如果 pos 是 - 1， 则在该链表中没有环。 注意： pos 不作为参数进行传递， 仅仅是为了标识链表的实际情况。
// 如果链表中存在环， 则返回 true。 否则， 返回 false。

// 思路：快慢指针，快指针一次走两步，慢指针一次走一步；
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    let fast = head;
    let slow = head;
    while (fast) {
        if (!fast.next) return false;
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
};
// 方法2：利用json循环引用抛出错误
var hasCycle2 = function (head) {
    try {
        JSON.stringify(head)
        return false
    } catch {
        return true
    }
};