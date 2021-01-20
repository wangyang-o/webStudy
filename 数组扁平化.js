/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 12:43:45
 * @LastEditors: wy
 * @LastEditTime: 2021年01月12日 12:51:01
 */
flatten = arr => {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
    }, []);
}
arr = [1, 2, [3, 4, [5, 6, 7]]];
console.log(flatten(arr));
console.log(arr.toString().split(',').map(item => +item));