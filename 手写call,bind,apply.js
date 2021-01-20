/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月13日 10:44:49
 * @LastEditors: wy
 * @LastEditTime: 2021年01月13日 11:27:40
 */

// Function.prototype.myCall = function (context, ...args) {
//     context = (typeof context === 'object' ? context : window);
//     const key = Symbol('myCall');
//     context[key] = this;
//     const result = context[key](...args);
//     delete context[key];
//     return result;
// }
Function.prototype.myApply = function (context, args) {
    context = (typeof context === 'object' ? context : window);
    const key = Symbol('myApply');
    context[key] = this;
    const result = context[key](...args);
    delete context[key];
    return result;
}
Function.prototype.myBind = function (context) {
    context = typeof context == 'object' ? context : window;
    return (...args) => {
        this.call(context, ...args);
    }
}

Function.prototype.myCall = function (context, ...args) {
    context = typeof context == 'object' ? context : window;
    const key = Symbol('myCall');
    context[key] = this;
    result = context[key](...args);
    delete context[key];
    return result;
}