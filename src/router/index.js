//引入路由组件
import Layout from "@/pages/Layout"
import Login from "@/pages/Login"
//导入高阶组件
import AuthRoute from "@/components/AuthRoute"

//配置路由
import { createBrowserRouter } from "react-router-dom"
//导入二级路由
import Home from "@/pages/Home"
import Article from "@/pages/Article"
import Publish from "@/pages/Publish"

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    children: [
      {
        path: "home",
        element: <Home></Home>,
      },
      {
        path: "article",
        element: <Article></Article>,
      },
      {
        path: "publish",
        element: <Publish></Publish>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router
