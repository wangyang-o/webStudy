/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年02月18日 22:02:29
 */
// 题目：17.二叉树的最小深度
// 

//思路：递归技巧

// 写出结束条件
// 不要把树复杂化，就当做树是三个节点，根节点，左子节点，右子节点
// 只考虑当前做什么，不用考虑下次应该做什么
// 每次调用应该返回什么
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
    if (!root) return 0;
    // null节点不参与比较
    if (root.left == null && root.right != null) {
        return 1 + minDepth(root.right);
    }
    // null节点不参与比较
    if (root.right == null && root.left != null) {
        return 1 + minDepth(root.left);
    }
    return 1 + Math.min(minDepth(root.left), minDepth(root.right));
};