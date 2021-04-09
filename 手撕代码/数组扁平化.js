/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 12:43:45
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月09日
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
// 带参数
Array.prototype._flat = function (deep) {
    let arr = this;
    if (deep == 0) {
        return arr;
    }
    let res = arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? cur._flat(deep--) : cur);
    }, [])
    return res;
}
console.log([1, [2, 3],
    [
        [4, 5, 6]
    ]
]._flat(1))