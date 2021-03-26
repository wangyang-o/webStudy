/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月26日 12:30:40
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 22:17:49
 */

function myNew(con, ...args) {
    let obj = {};
    obj.__proto__ = con.prototype;
    let res = con.apply(obj, args); //将构造函数中的this指向这个对象，并传递参数
    if (res instanceof Object) {
        return res;
    } else {
        return obj;
    }
}

function fn(name) {
    this.name = name;
}

function fn1(name) {
    this.name = name;
    return {
        name: 'www'
    }
}
// let a = myNew(fn, 'wy')
// console.log(a);

// let b = myNew(fn1, 'wy')
// console.log(b);