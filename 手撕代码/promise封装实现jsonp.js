/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年03月30日 12:08:14
 * @LastEditors: wy
 * @LastEditTime: 2021年03月30日 12:27:31
 */
function jsonp(url, data, callbackName) {
    return new Promise((resolve, reject) => {
        paramFlag = url.includes('?') ? '&' : '?';
        url += `${paramFlag}callback=${callbackName}`;
        if (data) {
            for (let [key, value] of data.entries()) {
                url += `&${key} = ${value}`;
            }
        }
        let script = document.createElement('script');
        script.src = url;
        // jsonp返回数据到回调函数 需要注意 回调函数必须绑定在window上 且接受数据完毕后要进行回调函数的删除
        window[callbackName] = (res) => {
            // 删除绑定在window上的回调函数
            delete window[callbackName]
            // 删除动态创建的script标签
            document.body.removeChild(script)
            if (res) {
                resolve(res)
            } else {
                reject('没有返回数据')
            }
        }
        script.onerror = () => {
            delete window[callbackName];
            document.body.removeChild(script);
            reject('script资源加载失败')
        }
        // 添加js节点到document上，开始请求
        dcoument.body.appendChild(script)
    })
}