/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月13日 16:19:39
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 21:24:41
 */
/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月13日 16:19:39
 * @LastEditors: wy
 * @LastEditTime: 2021年03月25日 20:01:15
 */
// let nm = read_line().split(' ');
let nm = [3, 4];
const max = Math.max(nm[0], nm[1]);
const arr2D = [
    [1, 2, 3, 1],
    [4, 5, 6, 1],
    [7, 8, 9, 1]
];

// const arr2D = [];
// for (let i = 0; i < nm[0]; i++) {
//     const arr = read_line().split(' ');
//     arr2D.push[arr];
// }
let res = [];
for (let i = 0; i < nm[1]; i++) {
    res.push([]);
    for (let j = 0; j < nm[0]; j++) {
        res[i].push(arr2D[j][i])
    }
}
console.log(res);
for (let i = 0; i < nm[1]; i++) {
    res[i] = res[i].join(' ');
    console.log(res[i]);
}