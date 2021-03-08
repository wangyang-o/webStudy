/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月08日 20:04:45
 * @LastEditors: wy
 * @LastEditTime: 2021年03月08日 20:05:45
 */
// 题目：
// 求 1+2+...+n ，要求不能使用乘除法、for、while、if、else、switch、case等关键字及条件判断语句（A?B:C）。

// 思路：
/**
 * @param {number} n
 * @return {number}
 */
var sumNums = function (n) {
    return n && sumNums(n - 1) + n;
};