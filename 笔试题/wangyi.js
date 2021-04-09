/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年04月02日 16:00:05
 * @LastEditors: wy
 * @LastEditTime: 2021年04月02日 16:38:53
 */
function fn(nums) {
    let min = Math.min(...nums);
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        if (nums[i] % min != 0) {
            min--;
            i = -1;
        }
    }

    // let i = 0;
    // while (i < len) {
    //     if (nums[i] % min != 0) {
    //         min--;
    //         i = 0;
    //     } else {
    //         i++;
    //     }
    // }
    return min;
}
console.log(fn([9, 6]));