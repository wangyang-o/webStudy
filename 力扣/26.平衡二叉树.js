/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月12日 22:07:11
 * @LastEditors: wy
 * @LastEditTime: 2021年03月12日 22:08:03
 */
// 题目：
// 输入一棵二叉树的根节点，判断该树是不是平衡二叉树。如果某二叉树中任意节点的左右子树的深度相差不超过1，那么它就是一棵平衡二叉树。
// 思路：自底向上递归
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function (root) {
    const dfs = node => {
        if (!node) return 0;
        let left = dfs(node.left);
        let right = dfs(node.right);
        if (left === -1 || right === -1 || Math.abs(left - right) > 1) return -1;
        return Math.max(left, right) + 1;
    }
    return dfs(root) !== -1;
};