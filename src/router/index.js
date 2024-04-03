//引入路由组件
import Layout from "@/pages/Layout";
import Login from "@/pages/Login";

//配置路由
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
  },
  {
    path: "/login",
    element: <Login />,
  },
])

export default router