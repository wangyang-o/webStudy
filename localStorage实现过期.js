/*
 * @Descripttion: 
 * @version: 
 * @Author: wy
 * @Date: 2021年01月16日 15:46:33
 * @LastEditors: wy
 * @LastEditTime: 2021年01月19日 22:13:38
 */
const localStorageExpireSet = (time, key, value) => {
    window.localStorage.setItem(key, value);
    window.localStorage.setItem(key + ',pre', new Date().getTime() + '');
    window.localStorage.setItem(key + ',time', time + '');


}

const localStorageExpireGet = (key)=> {
    let pre = window.localStorage.getItem(key + ',pre');
    let isExpire = new Date().getTime() - pre;
    let time = window.localStorage.getItem(key + ',time');
    if (isExpire > time) {
        window.localStorage.removeItem(key);
        window.localStorage.removeItem(key + ',pre');
        window.localStorage.removeItem(key + ',time');
        return '过期';
    } else {
        return window.localStorage.getItem(key);

    }
}
const localStorageExpire = {
    localStorageExpireSet,
    localStorageExpireGet
}
export default localStorageExpire