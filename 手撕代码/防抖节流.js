/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月12日 15:26:00
 * @LastEditors: wy
 * @LastEditTime: 2021年03月31日 19:21:37
 */
// 防抖-----一段时间内触发事件，重新计时.比如：百度搜索联想，
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
// 节流-----在一段时间内，只能触发一次函数，只有一次生效。如：onresize，onmousemove，onscroll
function throttle(fn, delay) {
    // 时间戳版
    let pre = 0;
    return (...args) => {
        let now = new Date().now();
        if (now - pre > delay) {
            fn.apply(this, args);
            pre = now;
        }
    }
}

function debunce(fn, delay) {
    let timer = null;
    return (...args) => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this, args);
        }, delay)
    }
}

function throttle(fn, delay) {
    let pre = 0;
    return (...args) => {
        let now = new Date().now();
        if (now - pre > delay) {
            fn.apply(this, args);
            pre = now;
        }
    }
}