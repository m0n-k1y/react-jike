//和用户相关的状态
import { createSlice } from "@reduxjs/toolkit"
//导入axios
import { request } from "@/utils"
const userStore = createSlice({
  name: "user",
  //   初始值
  initialState: {
    token: localStorage.getItem('token_key') || "",
  },
  //同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload
      //localStorage存一份token
      localStorage.setItem("token_key", action.payload)
    },
  },
})

//解构出actionCreator
const { setToken } = userStore.actions

//获取reducer函数
const userReducer = userStore.reducer

//异步方法 完成登录获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    //请求
    const res = await request.post("/authorizations", loginForm)
    console.log(res.data.token)
    console.log(res)
    //提交同步action进行token存储
    dispatch(setToken(res.data.token))
  }
}
//导出
export { setToken, fetchLogin }
export default userReducer
