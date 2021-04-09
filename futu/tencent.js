/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月31日 19:08:14
 * @LastEditors: wy
 * @LastEditTime: 2021年03月31日 21:36:48
 */
/*
编程题(需写代码）
(2) 合并两棵平衡二叉树为一棵平衡二叉树（结点数n>100000） ，空间复杂度不限，时间复杂度最低 


编程题(需写代码）
    有n次操作，第一次操作删除第一个数，求出剩下数列 a2,a3,....an相邻两数差绝对值的最大值为x1。
    (3) 有一个数列，a1,a2,a3,a4...an。 
第二次操作删除第二个数，求出剩下数列 a1,a3,....an相邻两数差的绝对值的最大值为x2。
第三次类似...
问你	x1+x2+...xn 的和是多少 
 t个样例 ， 3<=n<=1e5 ,   ai <=1e9 ,  时间限制 1000ms

*/
function fn(arr) {
    let max = [];

    for (let i = 1; i < arr.length - 1; i++) {
        max = max.push(Math.abs(arr[i] - arr[i - 1], arr[i + 1] - arr[i]))

    }
}