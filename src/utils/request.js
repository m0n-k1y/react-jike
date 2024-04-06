import axios from "axios"
import { getToken, removeToken } from "./token"
import router from "@/router"
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
    // 2xx 范围内的状态码都会触发该函数。
    return response.data
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 监控401 token失效
    console.dir(error)
    if (error.response.status === 401) {
      // 移除token
      removeToken()
      // 跳转到登录页
      //为什么会闪一下？=> 严格模式导致的
      router.navigate("/login")
      // router.navigate("/login").then(() => {
      //   window.location.reload()
      // })
      // window.location.href = "/login"
      window.location.reload()
    }
    return Promise.reject(error)
  }
)

// 导出
export { request }
