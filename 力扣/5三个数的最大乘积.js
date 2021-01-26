/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 15:49:04
 */
// 题目：
// 给你一个整型数组 nums ，在数组中找出由三个数组成的最大乘积，并输出这个乘积。

// 思路：
// 数组中全是非负数(全是非正数):n-1,n-2,n-3
// 有正数有负数:可能是最大正数乘积:n-1,n-2,n-3,也可能是两个最小负数和一个大数:0,1,n-1
// 先小到大排序
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
    nums.sort((a, b) => a - b);
    const n = nums.length;
    return Math.max(nums[0] * nums[1] * nums[n - 1], nums[n - 1] * nums[n - 2] * nums[n - 3]);
};