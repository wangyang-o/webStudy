/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 15:44:13
 * @LastEditors: wy
 * @LastEditTime: 2021年02月01日 23:53:37
 */
function promiseAll(promises) {
    return new Promise((reslove, reject) => {
        const result = [];
        if (!Array.isArray(promises)) {
            reject('error');
        }
        promises.forEach((item, index) => {
            item.then(
                res => {
                    // 保证先后顺序
                    result[index] = res;
                    if (result.length === promises.length) {
                        reslove(result);
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
        }, 400)
    })
}
let fn2 = function (fn) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('fn2');
        }, 200)
    })
}

promiseAll([fn1(), fn2()]).then(res => {
    console.log(res); // [ 'fn1', 'fn2' ]
}, rej => {
    console.log(rej); // [ 'fn1', 'fn2' ]

})