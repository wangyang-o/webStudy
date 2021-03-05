/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年03月05日 20:30:24
 */
// 题目：
// 请实现一个函数，用来判断一棵二叉树是不是对称的。如果一棵二叉树和它的镜像一样，那么它是对称的。
// 思路：递归，同时遍历左右节点，同时检查 左子树的左与右子树的右，左子树的右与右子树的左 见注释
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
var isSymmetric = function (root) {
    if (!root) return true;
    const check = (left, right) => {
        if (!left && !right) return true; //左右为null，返回真
        if (!left || !right) return false; //左边或者右边为null，返回假
        if (left.val !== right.val) return false; //左右值不相等，返回假
        return check(left.left, right.right) && check(left.right, right.left)
    }
    return check(root.left, root.right);
};