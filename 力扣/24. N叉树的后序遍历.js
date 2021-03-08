/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月08日 20:08:43
 * @LastEditors: wy
 * @LastEditTime: 2021年03月08日 20:26:42
 */

// 题目：
// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 思路：
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    const res = [];

    function serch(root) {
        if (root) {
            root.children.forEach(child => {
                serch(child);
            })
            res.push(root.val)
        }

    }
    serch(root);
    return res;
};