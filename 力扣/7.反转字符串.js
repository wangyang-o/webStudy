/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 16:23:42
 */
// 题目：
// 编写一个函数， 其作用是将输入的字符串反转过来。 输入字符串以字符数组 char[] 的形式给出。
// 不要给另外的数组分配额外的空间， 你必须原地修改输入数组、 使用 O(1) 的额外空间解决这一问题。
// 你可以假设数组中的所有字符都是 ASCII 码表中的可打印字符。

// 思路：双指针
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    const len = s.length;
    for (let i = 0, j = s - 1; i < j; i++, j--) {
        [s[i], s[j]] = [s[j], s[i]]
    }
};