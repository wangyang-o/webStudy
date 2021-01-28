/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月28日 13:12:18
 */
// 题目：
// 输入数字 n，按顺序打印出从 1 到最大的 n 位十进制数。比如输入 3，则打印出 1、2、3 一直到最大的 3 位数 999。

// 思路：计算最后一位数 Math.pow(10, n) - 1

/**
 * @param {number} n
 * @return {number[]}
 */
var printNumbers = function (n) {

    const arr = [];
    end = Math.pow(10, n) - 1;
    for (let j = 1; j <= end; j++) {
        arr.push(j);
    }
    return arr;
};