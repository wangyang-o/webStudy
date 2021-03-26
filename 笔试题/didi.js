/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月20日 19:45:56
 * @LastEditors: wy
 * @LastEditTime: 2021年03月20日 20:36:21
 */
// let arr=read_line().split('');
let arr = 'DAB*B*ACD'.split('');

// const isReverse = (arr) => {
//     let len = arr.length;
//     for (let i = 0, j = len - 1; i < len; i++, j--) {
//         if (arr[i] == '*' || arr[j] == '*' || arr[i] == arr[j]) {
//             continue;
//         } else {
//             return false;
//         }
//     }
//     return len;

// }
let len = arr.length;
const find = (arr) => {
    let result = arr[0] || "";
    for (let i = 0; i < len; i++) {
        for (let j = 1; j <= 2; j++) { //偶数奇数回文串
            let left = i,
                right = i + j;
            while (left >= 0 && right < len && arr[left] === arr[right] || arr[left] == '*' || arr[right] == '*') {
                left--, right++; //向外扩展直到两端不相同
            };
            let length = right - left - 1; //(right - 1) - (left + 1) + 1
            if (length > result.length) {
                result = arr.slice(left + 1, length + 1);
            }
        }
    }
    return result;

}
console.log(find(arr).length);