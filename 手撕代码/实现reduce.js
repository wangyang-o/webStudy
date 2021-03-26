/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 11:12:07
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 13:40:10
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 11:12:07
 * @LastEditors: wy
 * @LastEditTime: 2021年03月16日 12:04:01
 */
Array.prototype.myReduce = function (fun, initValue) {
    let arr = this;
    let base = initValue ? initValue : arr[0];
    let baseIndex = initValue ? 0 : 1;
    arr.slice(baseIndex).forEach((item, index, arr) => {
        base = fun(base, item, index + baseIndex, arr);
    })
    return base;
}
var arr = [1, 2, 3, 4]
let res = arr.myReduce((total, currentValue, currentIndex, arr) => {
    console.log(total, currentValue, currentIndex, arr)
    return total + currentValue
}, 10)
console.log(res);


