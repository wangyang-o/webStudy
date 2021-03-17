/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月16日 19:35:42
 * @LastEditors: wy
 * @LastEditTime: 2021年03月16日 19:40:25
 */


function findNum(arr) {
    // write code here
    let res = 0;
    let cont = 0;
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (cont == 0) {
            res = arr[i]
            cont++;
        } else {
            cont += res === arr[i] ? 1 : -1;
        }

    }
    return res > len / 2 ? res : -1;
}