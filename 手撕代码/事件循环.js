/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 17:11:10
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月09日
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


async function async1() {
    console.log('async1 start');
    await async2();
    console.log('async1 end');
}
async function async2() {
    console.log('async2');
}
console.log('script start');
setTimeout(function () {
    console.log('setTimeout');
}, 0);
async1();
new Promise(function (resolve) {
    console.log('promise1');
    resolve();
}).then(function () {
    console.log('promise2');
});
console.log('script end');
// script start ，
// async1 start，
// async2，
// promise1，
// script end，
// async1 end，
// promise2
// setTimeout