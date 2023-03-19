import axios from 'axios';
import qs from "qs";

const requests = axios.create({
  baseURL:"/api",
  timeout: 3000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" 
  }
})

requests.interceptors.request.use((config) => {
  console.log('==',config)
  config.data = qs.stringify(config.data);
  return config;
});

// 添加响应拦截器
requests.interceptors.response.use((response)=> {
  // 对响应数据做点什么
  console.log("response",response)
  return response.data;
}, (error)=> {
  // 对响应错误做点什么
  return Promise.reject(error);
});


export const axiosFun = (data={}) =>
  requests({
    url: "/list",
    data,
    method: "post",
  })


export default axiosFun;