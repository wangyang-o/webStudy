/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月26日 12:09:04
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 12:29:21
 */

let name = 2;
const obj = {
    name: 1,
    fn: function () {
        console.log('this.name:', this.name);
        console.log('this:', this);
        console.log('name:', name);
    }
}

let fn = obj.fn;
obj.fn();
fn();