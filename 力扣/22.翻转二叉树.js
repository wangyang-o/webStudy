/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年03月07日 20:55:04
 */
// 题目：请完成一个函数，输入一个二叉树，该函数输出它的镜像。
// 
// 思路：递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var mirrorTree = function (root) {
    if (!root) return root;
    [root.left, root.right] = [mirrorTree(root.right), mirrorTree(root.left)]
    return root;
};