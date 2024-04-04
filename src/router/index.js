//引入路由组件
import Layout from "@/pages/Layout"
import Login from "@/pages/Login"
//导入高阶组件
import AuthRoute from "@/components/AuthRoute"

//配置路由
import { createBrowserRouter } from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
