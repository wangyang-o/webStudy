/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月13日 11:05:28
 * @LastEditors: wy
 * @LastEditTime: 2021年01月23日 19:52:58
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
    let before = 1;
    let beforeLast = 1;
    let result = 1;
    for (let i = 2; i < n; ++i) {
        result = before + beforeLast;
        before = beforeLast;
        beforeLast = result;
    }
    return result;

}
console.log(dynfib(100));