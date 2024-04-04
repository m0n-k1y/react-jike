//封装高级组件
//有token 放行
//无token 拦截  去登录
import { getToken } from "@/utils"
import { Navigate } from "react-router-dom"
function AuthRoute({ children }) {
  const token = getToken()
  if (token) {
    return <>{children}</>
  } else {
    return <Navigate to={"/login"} replace/>
  }
}

export default AuthRoute
