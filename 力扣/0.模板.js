/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月28日 20:43:00
 */
// 题目：
// 给定一个排序数组，你需要在 原地 删除重复出现的元素，使得每个元素只出现一次，返回移除后数组的新长度。
// 不要使用额外的数组空间， 你必须在 原地 修改输入数组 并在使用 O(1) 额外空间的条件下完成。

// 思路：读指针，写指针

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let write = 0;
    for (let i = 1; i < nums.length; i++) {
        if (nums[write] != nums[i]) {
            write++;
            nums[write] = nums[i];
        } else {
            continue;
        }
    }
    return write + 1;
};