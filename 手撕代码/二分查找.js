/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月26日 20:22:50
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 20:36:28
 */
function binSearch(arr, data) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < data) {
            left = mid + 1;
        } else if (arr[mid] > data) {
            right = mid - 1;

        } else {
            return mid;
        }
    }

    return -1;
}
const arr = [1, 4, 5, 6, 88, 65, 44, 32, 49, 60, 81].sort((a, b) => {
    return a - b;
});
console.log(arr);
console.log(binSearch(arr, 44));