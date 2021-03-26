/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月10日 21:12:11
 * @LastEditors: wy
 * @LastEditTime: 2021年03月10日 21:45:37
 */
var isReverse = function (str) {
    const len = str.length;
    let s = str.split('');
    let index = -1;
    for (let i = 0, j = len - 1; i < j; i++, j--) {
        if (s[i] == s[j]) {
            continue;
        } else if (s[i] == s[j - 1]) {
            index = j;
            j--;
            continue;
        } else if (s[i + 1] == s[j]) {
            index = i;
            i++;
            continue;
        } else {
            return false;
        }
    }
    if (index != -1) {
        s.splice(index, 1);
        let res = s.join('');
        return res;
    }
}
console.log(isReverse('12321'));