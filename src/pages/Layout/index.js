import { Layout, Menu, Popconfirm } from "antd"
import {
  HomeOutlined,
  DiffOutlined,
  EditOutlined,
  LogoutOutlined,
} from "@ant-design/icons"
import "./index.scss"
import { Outlet, useLocation, useNavigate } from "react-router-dom"
// 引入store
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
// 引入action
import { fetchUserInfo } from "@/store/modules/user"


const { Header, Sider } = Layout

const items = [
  {
    label: "首页",
    key: "/",
    icon: <HomeOutlined />,
  },
  {
    label: "文章管理",
    key: "/article",
    icon: <DiffOutlined />,
  },
  {
    label: "创建文章",
    key: "/publish",
    icon: <EditOutlined />,
  },
]

const GeekLayout = () => {
  //注册导航跳转
  const navigate = useNavigate()
  //监听点击导航按钮 
  const onMenuClick = (route) => { 
    console.log("点击了导航按钮", route)
    const path = route.key
    navigate(path)
  }



  //反向高亮  点击的导航项
  //1.获取当前路由地址
  const location = useLocation()
  console.log(location.pathname);
  const selectedKeys = location.pathname

  //初始化时  触发个人用户信息获取
  const dispatch = useDispatch()
  useEffect(() => { 
    dispatch(fetchUserInfo())
  }, [dispatch])

  //获取用户信息并渲染
  const name = useSelector(state => state.user.userInfo.name)
  
  return (
    <Layout>
      <Header className="header">
        <div className="logo" />
        <div className="user-info">
          <span className="user-name">{ name }</span>
          <span className="user-logout">
            <Popconfirm title="是否确认退出？" okText="退出" cancelText="取消">
              <LogoutOutlined /> 退出
            </Popconfirm>
          </span>
        </div>
      </Header>
      <Layout>
        <Sider width={200} className="site-layout-background">
          <Menu
            mode="inline"
            theme="dark"
            //默认选中的菜单项
            //defaultSelectedKeys={["1"]}
            //自定义选中的菜单项
            selectedKeys={selectedKeys}
            items={items}
            onClick={onMenuClick}
            style={{ height: "100%", borderRight: 0 }}
          ></Menu>
        </Sider>
        <Layout className="layout-content" style={{ padding: 20 }}>
          {/* //二级路由出口 */}
          <Outlet></Outlet>
        </Layout>
      </Layout>
    </Layout>
  )
}
export default GeekLayout
