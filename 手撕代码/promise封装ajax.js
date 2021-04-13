/*
 * @Descripttion: promise封装ajax
 * @version: 
 * @Author: wy
 * @Date: 2021年01月11日 13:21:20
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2021年04月13日
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
setTimeout(() => {
    console.log(1);
})
new Promise(res => {
    res();
    console.log(2);

}).then(() => {
    console.log(3);
})
console.log(4);

async function a() {
    const d = (await 'ss').reject('error');
    console.log(d);
}

function ajax(method, url) {
    return new Promise((reslove, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onreadystatechange = () => {
            if (xhr.readyState == 4) {
                if (xhr.status >= 200 && xhr.status < 300 || xhr.status == 304) {
                    reslove(xhr.response);
                } else {
                    reject(xhr.status);
                }
            }

        }
    })

}