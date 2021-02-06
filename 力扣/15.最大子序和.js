/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年02月06日 22:38:15
 */
// 题目：
// 给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

// 思路：动态规划

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let pre = 0;
    let maxAns = nums[0];
    nums.forEach(item => {
        // 相当于加了item后，反而变小了，就不要，也就是取大的值
        pre = Math.max(pre + item, item);
        // 找到最大值后，保存起来，与后面的还要比较。
        maxAns = Math.max(maxAns, pre);
    })
    return maxAns;
};