/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月31日 22:38:56
 */
// 题目：
// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～ n - 1 的范围内。
// 数组中某些数字是重复的， 但不知道有几个数字重复了， 也不知道每个数字重复了几次。 请找出数组中任意一个重复的数字。


// 思路：1.条件置换，2.先排序,然后比较。

/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            return nums[i];
        }
    }
    // for (let i = 0; i < nums.length; i++) {
    //     let cur=nums[i];
    //     if(cur!==i){
    //       if(cur!==nums[cur]){
    //         [nums[cur],cur] = [cur,nums[cur]];
    //       }else{
    //           return cur;
    //       }
    //     }
    // }
};
console.log(findRepeatNumber([2, 1, 0, 3, 5, 2]));;