/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 15:26:00
 * @LastEditors: wy
 * @LastEditTime: 2021年01月12日 15:40:45
 */
// 防抖-----一段时间内触发事件，重新计时
function debounce(fn, delay) {
    let timer = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    }
}
// 节流-----在一段时间内，只能触发一次函数。如果这段时间内触发多次函数，只有一次生效。
function throttle(fn, delay) {
    // 时间戳版
    let pre = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - pre > delay) {
            fn.apply(this, args);
            pre = now;
        }
    }
}