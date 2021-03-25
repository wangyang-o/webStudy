/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:44:10
 * @LastEditors: wy
 * @LastEditTime: 2021年03月23日 16:40:12
 */
// 题目：
// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。
// 有效字符串需满足：
//     左括号必须用相同类型的右括号闭合。
//     左括号必须以正确的顺序闭合。

// 思路：
// 使用hashmap，括号不能闭合时，就可以直接返回false了
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid1 = function (s) {
    const len = s.length;
    if (len % 2 === 1) {
        return false;
    }
    const stk = [];
    const myMap = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])
    for (let i = 0; i < len; i++) {
        if (myMap.has(s[i])) { //如果是反括号
            //栈顶部是否和括号合闭
            if (stk[stk.length - 1] !== myMap.get(s[i])) {
                return false;
            }
            stk.pop();
        } else {
            stk.push(s[i]);
        }

    }
    return !stk.length;
};
const isValid = (s) => {
    let len = s.length;
    if (len % 2 === 1) {
        return false;
    }
    const stk = [];
    myMap = new Map([
        ['}', '{'],
        [']', '['],
        [')', '('],
    ])
    for (let i = 0; i < len; i++) {
        if (myMap.has(s[i])) {
            if (stk[stk.length - 1] !== myMap.get(s[i])) {
                return false
            } else {
                stk.pop();
            }

        } else {
            stk.push(s[i])
        }
    }
    return !stk.length
}
console.log(isValid('[](){}{}'));