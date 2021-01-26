/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 15:57:39
 * @LastEditors: wy
 * @LastEditTime: 2021年01月26日 16:10:01
 */
const arr = [5, 7, 3, 543, 56, 3, 55, 33, 9];

function sort(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length - 1 + i; j++) {
            if (arr[i] > arr[j]) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
            }
        }
    }
    return arr;
}
console.log(sort(arr).toString());