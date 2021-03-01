/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年03月01日 13:47:18
 */
// 题目：19.买股票的最佳时机
// 给定一个数组 prices ，它的第 i 个元素 prices[i] 表示一支给定股票第 i 天的价格。
// 你只能选择 某一天 买入这只股票， 并选择在 未来的某一个不同的日子 卖出该股票。 设计一个算法来计算你所能获取的最大利润。
// 返回你可以从这笔交易中获取的最大利润。 如果你不能获取任何利润， 返回 0。


// 思路：动态规划，遍历的过程中保存最小值和最大差值

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let min = prices[0];
    let res = 0;
    for (let i = 1; i < prices.length; i++) {
        min = Math.min(min, prices[i]);
        res = Math.max(res, prices[i] - min);
    }
    return res;
};