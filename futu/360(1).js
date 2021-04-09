/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月28日 20:49:41
 * @LastEditors: wy
 * @LastEditTime: 2021年03月28日 20:55:45
 */
let n = 3;
let arr = ['1', '2', '3'];
let res = 0;
arr.forEach((item, i) => {
    arr[i] = +item;
})
res = arr.reduce((pre, cur) => {
    return pre + cur;
}, res)
for (let i = 0; i < n - 1; i++) {
    for (let j = i+1; j < n; j++) {
        res = res + (arr[i] | arr[j])
    }
}
console.log(res);