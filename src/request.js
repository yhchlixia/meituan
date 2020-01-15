import axios from "axios";
import sha1 from "js-sha1";
import qs from "qs";

const accessTokenKey = "access_token";
const authKey = "Authorization";
let jwt = "";

axios.defaults.headers.common["X-Platform"] = "everonet";

const service = axios.create({
  timeout: 5000
});
service.defaults.baseURL = "http://192.168.17.22:8080"

service.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=UTF-8';
service.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    // console.log(config,'adapter')
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url:config.baseURL+config.url,
      method:config.method,
      data:data,
      success:(res)=>{
        return resolve(res)},
      fail:(err)=>{
        return reject(err)}
    })
  })
}

service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return error;
  }
);

service.interceptors.response.use(
  response => {
    return response.data;
  },
  errer => {
    return errer.response;
  }
);

export default service;