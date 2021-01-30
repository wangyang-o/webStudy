/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月30日 20:36:07
 */
// 题目：
// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀， 返回空字符串 ""。

// 思路：
// 初始化为strs[0],两两比较，得到公共前缀ans，再进行ans和下一个字符串比较，
// 每次更新ans；每一轮对比结束，判断ans是否为空，可提前中断返回结果。

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return '';
    }
    let result = strs[0];
    for (let i = 1; i < strs.length; i++) {
        for (let j = 0; j < result.length; j++) {
            if (result[j] != strs[i][j]) {
                result = result.substr(0, j);
                break;
            }
        }
        if (result == '') {
            return result;
        }
    }
    return result;
};