/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月13日 11:05:28
 * @LastEditors: wy
 * @LastEditTime: 2021年03月16日 16:24:26
 *   n   num
 *   1   1
 *   2   2
 *   3   3
 *   4   5
 */
function fib(n) {
    if (n < 2) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}

function dynfib(n) {
    if (n === 0) return 0;
    let before = 1;
    let beforeLast = 1;
    let result = 2;
    for (let i = 2; i < n; ++i) {
        result = before + beforeLast;
        before = beforeLast;
        beforeLast = result;
    }
    return result;

}
console.log(dynfib(0));