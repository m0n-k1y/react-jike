import "./index.scss"
import { Card, Form, Input, Button ,message} from "antd"
import logo from "@/assets/logo.png"
//导入dispatch
import { useDispatch } from "react-redux"
//导入action fetchLogin
import { fetchLogin } from "@/store/modules/user"
//导入路由跳转
import { useNavigate } from "react-router-dom"
const Login = () => {
  //获取dispatch  navigate
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //点击登录提交
  const onFinish = async (values) => {
    console.log(values)
    //触发异步action fetchLogin 登录验证
    await dispatch(fetchLogin(values))
    //跳转首页+提示登录成功
    navigate('/')
    message.success('登录成功')
    //
  }
  return (
    <div className="login">
      <Card className="login-container">
        <img className="login-logo" src={logo} alt="" />
        {/* 登录表单 */}
        <Form validateTrigger="onBlur" onFinish={onFinish}>
          <Form.Item
            name="mobile"
            rules={[
              {
                required: true,
                message: "请输入手机号",
              },
              {
                pattern: /^1[3-9]\d{9}$/,
                message: "手机号码格式不对",
              },
            ]}
          >
            <Input size="large" placeholder="请输入手机号" />
          </Form.Item>
          <Form.Item
            name="code"
            rules={[
              {
                required: true,
                message: "请输入验证码",
              },
            ]}
          >
            <Input size="large" placeholder="请输入验证码" />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" size="large" block>
              登录
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Login
