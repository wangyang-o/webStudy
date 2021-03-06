/*
 * @Descripttion: 柯里化：1.延迟执行，2.参数复用
 * @version: 
 * @Author: wy
 * @Date: 2021年01月11日 15:58:25
 * @LastEditTime: 2021年04月12日
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
// 复习
function curry(fn, args) {
    if (args.length >= fn.length) {
        return fn(...args);
    }
    return function (...args1) {
        return curry(fn, ...args, ...args1);
    }
}
console.log(currying(add, 1)(2, 3, 4, 6));