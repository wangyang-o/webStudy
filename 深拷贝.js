/*
 * @Descripttion: 深拷贝
 * @version: 
 * @Author: wy
 * @Date: 2021年01月08日 15:15:00
 * @LastEditors: wy
 * @LastEditTime: 2021年01月13日 11:05:56
 */
function deepCopy(obj) {
    let copy = obj instanceof Array ? [] : {};
    for (const key in obj) {
        // console.log(typeof obj[key]);
        if (typeof obj[key] === 'object') {
            copy = deepCopy(obj[key]);
        } else {
            copy[key] = obj[key];
        }
    }
    return copy;

}
const a = {
    name: 'wangyang',
    obj: {
        age: 12,
        gender: 'man',
    },
    func: () => {
        console.log('object');
    }
}
console.log(deepCopy(a));