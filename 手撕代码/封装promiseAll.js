/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 15:44:13
 * @LastEditors: wy
 * @LastEditTime: 2021年01月12日 15:54:37
 */
function promiseAll(promises) {
    return new Promise((reslove, reject) => {
        const result = [];
        promises.forEach(item => {
            item.then(
                res => {
                    result.push(res);
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