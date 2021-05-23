import React from "react";
import axios from "axios";
import qs from 'qs'

let value = null
let common = {};


common.getUrl = function () {
    let url = "http://101.132.186.59:8082/"
    // http://localhost:8082/
    return url
}
export default common

// //全局请求ajax
// common.ajax = async function (url, params = {}, requestType = "get") {
//     if (requestType === "post") {
//         console.log("params", params)
//         return new Promise(function (resolve, reject) {
//             url = 'http://101.132.186.59:8082' + url
//             axios.post(url, {params: qs.stringify(params)}).then((res) => {
//                 console.log("res", res.data.data)
//                 // 成功
//                 if (res.data.code === 'SUCCESS') {
//                     value = res.data.data
//                     resolve(value);
//                     return
//                 } else {
//                 }
//                 return value
//             })
//         })
//     }
//     if (requestType === "get") {
//         console.log("params", params)
//         return new Promise(function (resolve, reject) {
//             url = 'http://101.132.186.59:8082' + url
//             axios.get(url, {params: params}).then((res) => {
//                 console.log("res", res.data.data)
//                 // 成功
//                 if (res.data.code === 'SUCCESS') {
//                     value = res.data.data
//                     resolve(value);
//                     return
//                 } else {
//                     // 返回报错
//                     // reject(res.data.message());
//                     // return
//                 }
//                 return value
//             })
//         })
//     }
// };
// export default common