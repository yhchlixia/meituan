import axios from "axios";
import sha1 from "js-sha1";
import qs from "qs";

const accessTokenKey = "access_token";
const authKey = "Authorization";
let jwt = "";

axios.defaults.headers.common["X-Platform"] = "everonet";

const service = axios.create({
  baseURL: "/",
  timeout: 5000
});

service.defaults.headers.post[ 'Content-Type' ] = 'application/x-www-form-urlencoded;charset=UTF-8';
service.defaults.adapter = function (config) {
  return new Promise((resolve, reject) => {
    // console.log(config,'adapter')
    let data = config.method === 'get' ? config.params : qs.stringify(config.data)
    console.log(config);
    // wx小程序 发起请求相应 log 就可以看到熟悉的返回啦
    wx.request({
      url:config.url,
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
    if (response.headers.access_token) {
      sessionStorage.setItem("access_token", response.headers.access_token);
    }
    return response;
  },
  errer => {
    return errer.response;
  }
);

export default service;