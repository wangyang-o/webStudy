/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月26日 20:01:02
 * @LastEditors: wy
 * @LastEditTime: 2021年03月26日 20:13:14
 */
function Parent(name = 'coding') {
    this.name = name;
    this.say = function () {
        console.log('say hello!');
    }
}

function Child(age = 20, name = 'js') {

    // Animal.call(this);构造函数继承
    this.age = age;
    this.name = name;
}
// 1.原型链继承
Child.prototype = new Parent();
//　Test Code
var child = new Child();
console.log(child.name);
child.say();
console.log(child instanceof Parent); //true 
console.log(child instanceof Child); //true