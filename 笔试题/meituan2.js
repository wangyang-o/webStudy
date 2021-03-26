/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月13日 16:08:40
 * @LastEditors: wy
 * @LastEditTime: 2021年03月13日 17:59:28
 */

// let str = read_line().split('');
let str = '000a01qwq1dsfbjk322222dsf33'.split('')
let res = [];
let slow = 0;
let fast = 0;
for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 && str[i] <= 9) {
        res.push(str[i]);
    } else if (str[i - 1] >= 0 && str[i - 1] <= 9 && i != 0 & i != str.length - 1) {
        res.push(' ');
    }
}
res = res.join('').split(' ')
res = res.map(item => {
    return item - 0;
});
res.sort((a, b) => {
    return a - b;
})

if (str.length == 0) {
    console.log('');
} else {
    for (let item of res) {
        console.log(item);

    }
}
console.log(res);
// for (let item of res) {
//     console.log(item);

// }