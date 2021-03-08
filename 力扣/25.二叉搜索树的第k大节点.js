/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月08日 20:33:09
 * @LastEditors: wy
 * @LastEditTime: 2021年03月08日 20:33:51
 */
// 题目：
// 给定一棵二叉搜索树，请找出其中第k大的节点。

// 思路：中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
 var kthLargest = function (root, k) {
    const res = [];
    const serch=root=>{
        if(root){
            serch(root.left);
            res.push(root.val);
            serch(root.right);
        }
    }
    serch(root);
    return res[res.length-k];
};