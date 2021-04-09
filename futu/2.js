/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月27日 14:12:27
 * @LastEditors: wy
 * @LastEditTime: 2021年03月28日 20:43:58
 */
// let one = read_line().split(' ');
// let N = one[0];
// let M = one[1];
// let K = one[2];
let N = 5;
let M = 10;
let K = 2;
// let res = read_line().split(' ')[1];
let res = 5;
let arr1 = [
    [0, 5],
    [8, 6],
    [10, 8],
    [18, 12],
    [22, 15]
];
// for (let i = 0; i < N - 1; i++) {
//     let arr = read_line().split(' ');
//     arr1.push(arr);
// }

let filter = [];
let temp = [];
for (let i = 1; i < K; i++) {
    for (let j = 0; j < arr1.length; j++) {
        console.log(arr1[j][0], M * i, M * (i - 1));
        if (arr1[j][0] <= M * i && arr1[j][0] >= M * (i - 1)) {
            temp.push(arr1[j])
        }

    }

}
console.log(temp);
filter.push(temp)
console.log(filter);
let num = 1;
for (let i = 0; i < filter.length; i++) {
    let len = filter[i].length;

    if (len && num < K) {
        res = res + filter[i][len - 1][1];
        num++;
    } else {
        console.log(res);
    }

}