/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月26日 13:40:31
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 13:49:52
 */
Array.prototype.myMap = function (callback, context) {
    let arr = this;
    let res = [];

    for (let i = 0; i < arr.length; i++) {
        let temp = callback.call(context, arr[i], i, arr)
        res.push(temp);
    }
    return res;
}