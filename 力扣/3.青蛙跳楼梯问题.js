/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月23日 21:39:54
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 15:08:02
 */
// 题目：
// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 思路:
// 斐波那契数列，动态规划 1 1 2 3 5 8...特殊处理:n为0时,返回1
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
    if (n === 0) return 1;
    if (n <= 3) {
        return n;
    }
    let before = 2;
    let beforeLast = 3;
    let result = 5;
    for (let i = 3; i < n; i++) {
        result = (before + beforeLast) % 1000000007;
        before = beforeLast;
        beforeLast = result;
    }
    return result;
};