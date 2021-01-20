/*
 * @Descripttion: promise封装ajax
 * @version: 
 * @Author: wy
 * @Date: 2021年01月11日 13:21:20
 * @LastEditors: wy
 * @LastEditTime: 2021年01月11日 14:22:06
 */

function ajax(method, url) {
    return new Promise((res, rej) => {
        const request = new XMLHttpRequest();
        request.open(method, url);
        request.onreadystatechange = () => {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status < 300 || request.status == 304) {
                    res(request.response);
                } else {
                    rej(request);
                }
            }
        }
    })
}
ajax('get', 'www.baudu.com').then((response) => {
    console.log(response);
})