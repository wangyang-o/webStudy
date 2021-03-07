/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 12:43:45
 * @LastEditors: wy
 * @LastEditTime: 2021年03月06日 14:20:09
 */
flatten = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
arr = [1, 2, [3, 4, [5, 6, 7]]];
console.log(flatten(arr));
console.log(arr.toString().split(',').map(item => +item));
// 
flatten1 = (arr) => {
    const res = [];
    for (const value of arr) {
        if (Array.isArray(value)) {
            res = res.concat(flatten1(value));
        } else {
            res.push(value);
        }
    }
    return res;
}