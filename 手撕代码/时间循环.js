/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 17:11:10
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 12:08:52
 */

console.log('start');


setTimeout(() => {
    console.log('100');
    Promise.resolve('eee').then(res => {
        console.log(res);
    })
}, 100)

Promise.resolve().then(res => {
    console.log('Promise2');
})
console.log('center');
setTimeout(() => {
    console.log('300');
}, 300)

// start center Promise2 100 Promise1 300



