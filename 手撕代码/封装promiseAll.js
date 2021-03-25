/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 15:44:13
 * @LastEditors: wy
 * @LastEditTime: 2021年03月23日 12:37:11
 */
function promiseAll(promises) {
    return new Promise((resolve, reject) => {
        const result = [];
        let counter = 0;
        let len = promises.length;
        if (!Array.isArray(promises)) {
            reject('error');
        }
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                res => {
                    // 保证先后顺序
                    result[index] = res;
                    counter++;
                    if (counter === len) {
                        resolve(result);
                    }
                },
                rej => {
                    reject(rej);
                }
            )
        });
    })
}

// 函数返回的是一个 promise
let fn1 = function () {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn1');
        }, 500)
    })
}
let fn2 = function (fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn2');
        }, 200)
    })
}

myPromiseAll([fn1(), fn2()]).then(res => {
    console.log(res); // [ 'fn1', 'fn2' ]
}, rej => {
    console.log(rej); // [ 'fn1', 'fn2' ]

})

function myPromiseAll(promises) {

    return new Promise((resolve, reject) => {
        if (!Array.isArray(promises)) {
            reject('error');
        }
        let count = 0;
        const result = [];
        let len = promises.length;
        promises.forEach((item, index) => {
            Promise.resolve(item).then(
                res => {
                    count++;
                    result[index] = res;
                    if (count === len) {
                        resolve(result);
                    }
                },
                rej => {
                    reject(rej);
                })
        });
    })
}