/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月10日 19:40:09
 * @LastEditors: wy
 * @LastEditTime: 2021年03月10日 20:28:49
 */
let num = read_line();
let res = 0;
for (let i = 0; i < num; i++) {
    let size = read_line();

    let color1 = null;
    let color2 = null;

    let flag = true;
    for (let j = 0; j < size; j++) {
        let str = read_line().split('');
        if (i == 0) {
            color1 = str[0];
            color2 = str[1];
        }
        // flag = str.every(item => {
        //     return (item == color1 || item == color2)
        // })
        if (str.join('') != str.reverse().join('')) {
            flag = false;
        }
    }
    if (flag) {
        res++;
    }
}
console.log(res);