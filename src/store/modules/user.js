//和用户相关的状态
import { createSlice } from "@reduxjs/toolkit"
//导入axios
import { request } from "@/utils"
//导入设置 token 的方法
import { setToken as _setToken, getToken,removeToken } from "@/utils"

const userStore = createSlice({
  name: "user",
  //   初始值
  initialState: {
    token: getToken() || "",
    // 用户信息
    userInfo: {},
  },
  //同步修改方法
  reducers: {
    // 设置token
    setToken(state, action) {
      state.token = action.payload
      //localStorage存一份token
      _setToken(action.payload)
    },
    // 设置用户信息
    setUserInfo(state, action) {
      state.userInfo = action.payload
    },
    // 清除用户信息
    clearUserInfo(state) {
      state.userInfo = {}
      state.token = ""
      removeToken()
    },
  },
})

//解构出actionCreator
const { setToken, setUserInfo ,clearUserInfo} = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //请求
    const res = await request.post("/authorizations", loginForm)
    // console.log(res.data.token)
    // console.log(res)
    //提交同步修改方法  进行token存储
    dispatch(setToken(res.data.token))
  }
}
//异步方法  获取用户信息
const fetchUserInfo = () => {
  return async (dispatch) => {
    //请求
    const res = await request.get("/user/profile")
    // console.log(res)
    //提交同步修改方法  进行用户信息存储
    dispatch(setUserInfo(res.data))
  }
}
//导出
export { setToken, fetchLogin, fetchUserInfo ,clearUserInfo}
export default userReducer
