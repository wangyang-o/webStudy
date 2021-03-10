/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月10日 20:45:32
 * @LastEditors: wy
 * @LastEditTime: 2021年03月10日 20:59:07
 */
let oneLine = read_line().split(' ');
let n = oneLine[0];
let p = oneLine[1];
const score = read_line().split(' ');
for (let i = 0; i < p; i++) {
    const line = read_line().split(' ');

    if (line[1] - line[1] < 3) {
        console.log('NoScore');
    } else {
        const arr = score.slice(line[0] - 1, line[1]);
        let max = Math.max(arr);
        let min = Math.min(arr);
        let maxindex = arr.indexOf(max);
        let minindex = arr.indexOf(min);
        arr.splice(maxindex, 1);
        arr.splice(minindex, 1);
        arr.reduce(() => {

        })
        console.log(object);
    }
}
// let a = [1, 5, 2, 3, 2];
// const arr = a.slice(1 - 1, 3);
// console.log(arr);