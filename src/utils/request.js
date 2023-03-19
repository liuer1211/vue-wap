import axios from 'axios';
import qs from "qs";

// 创建对象
const requests = axios.create({
  baseURL:"/api",
  timeout: 3000,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" 
  }
})

// 添加请求拦截器
requests.interceptors.request.use((config) => {
  console.log('请求拦截器=',config)
  config.data = qs.stringify(config.data);
  return config;
});

// 添加响应拦截器
requests.interceptors.response.use((response)=> {
  // 对响应数据做点什么
  console.log("响应拦截器=",response)
  return response.data;
}, (error)=> {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default requests;