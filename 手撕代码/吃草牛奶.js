/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月06日 15:51:19
 * @LastEditors: wy
 * @LastEditTime: 2021年03月06日 16:55:40
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 * 最大牛奶桶数
 * @param grass int整型一维数组 吃的草的捆数
 * @param milk int整型一维数组 产的牛奶桶数
 * @return int整型
 */
function MaxMilk(grass, milk) {
    // write code here
    function Mysort(grass1, milk1) { //大到小排序
        for (let i = 0; i < milk1.length; i++) {
            for (let j = i + 1; j < milk1.length - 1 + i; j++) {
                if (milk1[i] < milk1[j]) {
                    [milk1[i], milk1[j]] = [milk1[j], milk1[i]];
                    [grass1[i], grass1[j]] = [grass1[j], grass1[i]];
                }
            }
        }
        return [grass1, milk1];
    }
    res = Mysort(grass, milk);
    let max = res[1][0];
    let max1 = 0;
    for (let i = 1; i < res[1].length; i++) {
        if (res[0][i] <= res[0][i - 1]) {
            // console.log(max);
            max = max + res[1][i];
        } else {
            max1 = max1 + res[1][i];
            max = Math.max(max, max1);
        }

    }
    return Math.max(max, max1);
}
