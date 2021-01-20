/*
 * @Descripttion: 柯里化
 * @version: 
 * @Author: wy
 * @Date: 2021年01月11日 15:58:25
 * @LastEditors: wy
 * @LastEditTime: 2021年01月11日 18:10:34
 */
function currying(fn, ...args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    return function (...args1) {
        return currying(fn, ...args, ...args1);
    }
}

function add(x, y, z, m, n) {
    return x + y + z + m + n;
}
console.log(currying(add, 1)(2, 3));