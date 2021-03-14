/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月13日 15:26:11
 * @LastEditors: wy
 * @LastEditTime: 2021年03月14日 16:21:50
 */
function quickSort(arr) {
    //结束标志
    if (arr.length <= 1) {
        return arr;
    }

    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0]; //基数
    const left = [];
    const right = [];
    for (const item of arr) {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    return quickSort(left).concat(pivot, quickSort(right));
}
const arr = [2, 87, 5, 4, 6, 77, 55, 8, 44, 0];
console.log(quickSort(arr));



function quicksort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let pivotIndex = Math.floor(arr.length / 2);
    let pivot = arr.splice(pivotIndex, 1)[0];
    let left = [];
    let right = [];
    for (const item of arr) {
        if (item < pivot) {
            left.push(item);
        } else {
            right.push(item);
        }
    }
    return quicksort(left).concat(pivot, quicksort(right));
}
console.log(quicksort(arr));