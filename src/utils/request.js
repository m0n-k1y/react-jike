import axios from "axios"
import { getToken } from "./token"
// 创建axios实例
const request = axios.create({
  baseURL: "http://geek.itheima.net/v1_0",
  timeout: 5000,
})
// 添加请求拦截器
// 添加token校验
request.interceptors.request.use(
  (config) => {
    const token = getToken()
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)
// 添加响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 导出
export { request }
