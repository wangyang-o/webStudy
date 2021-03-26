/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 19:18:25
 * @LastEditors: wy
 * @LastEditTime: 2021年03月17日 14:50:22
 */
Array.prototype.myReduce = function (fn, initValue) {
    let arr = this;
    let base = initValue ? initValue : arr[0];
    let baseIndex = initValue ? 0 : 1;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        base = fn(base, arr[i], i + baseIndex, arr);

    }
    return base;
}
console.log([1, 2, 3, 4].myReduce((pre, cur) => {
    console.log(pre, cur);
}, 10));