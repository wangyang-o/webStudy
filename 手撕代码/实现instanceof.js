/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月23日 17:27:50
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月12日
 */
function instanceOf(left, right) {
    let leftValue = left.__proto__;
    let rightValue = right.prototype;
    while (true) {
        if (leftValue === null) {
            return false;
        }
        if (leftValue === rightValue) {
            return true;
        }
        leftValue = leftValue.__proto__;
    }
}