/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月26日 14:46:29
 * @LastEditors: wy
 * @LastEditTime: 2021年01月31日 20:19:18
 */
// 题目：
// 版本号排序  如传入参数['1.5','2.0','1.7','1.1.5'] 返回 ['1.1.5','1.5','1.7','2.0']

// 思路：如果当前版本号相同则比较下一位；如果版本号位数不相等而前几位值一致则认为位数多的版本号大。

const arr = ['1.5', '2.0', '1.7.6', '1.1.57']
arr.sort((a, b) => {
    let i = 0;
    const arr1 = a.split('.');
    const arr2 = b.split('.');

    while (true) {
        const s1 = arr1[i];
        const s2 = arr2[i++];

        if (s1 === undefined || s2 === undefined) {
            return arr2.length - arr1.length;
        }

        if (s1 === s2) continue;

        return s2 - s1;
    }
});

console.log(arr);