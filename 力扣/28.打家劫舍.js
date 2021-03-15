/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年03月15日 22:00:37
 */
// 题目：
// 你是一个专业的小偷， 计划偷窃沿街的房屋。 每间房内都藏有一定的现金，
// 影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
// 如果两间相邻的房屋在同一晚上被小偷闯入， 系统会自动报警。
// 给定一个代表每个房屋存放金额的非负整数数组， 计算你 不触动警报装置的情况下， 一夜之内能够偷窃到的最高金额。
// 思路：动态规划  
// 由于不可以在相邻的房屋闯入， 所以在当前位置 n 房屋可盗窃的最大值， 要么就是 n - 1 房屋可盗窃的最大值，
// 要么就是 n - 2 房屋可盗窃的最大值加上当前房屋的值， 二者之间取最大值


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    let len = nums.length;
    if (len == 0) return 0;
    const dp = new Array(len + 1);
    dp[0] = 0;
    dp[1] = nums[0];
    for (let i = 2; i <= len; i++) {
        dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1])
    }
    return dp[len];
};