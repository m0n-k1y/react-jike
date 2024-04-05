import {
  Card,
  Breadcrumb,
  Form,
  Button,
  Radio,
  Input,
  Upload,
  Space,
  Select,
} from "antd"
import { PlusOutlined } from "@ant-design/icons"
import { Link } from "react-router-dom"
import "./index.scss"
//导入富文本编辑器
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
//导入文章相关api
import { createArticleAPI, getChannelAPI } from "@/apis/article"
import { useEffect, useState } from "react"

const { Option } = Select

const Publish = () => {
  //获取频道列表
  const [channelList, setChannelList] = useState([])
  useEffect(() => {
    //1. 封装函数 在函数体中调用接口
    const getChannelList = async () => {
      const res = await getChannelAPI()
      setChannelList(res.data.channels)
      // console.log(channelList)
    }
    //2. 调用函数
    getChannelList()
  }, [])

  //表单提交
  const onFinish = (values) => {
    const { channel_id, content, title } = values
    //1.按照接口文档的格式封装数据
    const reqDate = {
      title,
      content,
      cover: {
        type: 0,
        images: [],
      },
      channel_id,
    }
    //2.调用接口提交
    createArticleAPI(reqDate)
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  //上传图片回调
  const [imageList, setImageList] = useState([])
  const onChange = (value) => {
    console.log('uploading', value) 
    setImageList(value.fileList)
    console.log(imageList);
  } 
  return (
    <div className="publish">
      <Card
        title={
          <Breadcrumb
            items={[
              { title: <Link to={"/"}>首页</Link> },
              { title: "发布文章" },
            ]}
          />
        }
      >
        <Form
          onFinish={onFinish}
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ type: 1 }}
        >
          <Form.Item
            label="标题"
            name="title"
            rules={[{ required: true, message: "请输入文章标题" }]}
          >
            <Input placeholder="请输入文章标题" style={{ width: 400 }} />
          </Form.Item>
          <Form.Item
            label="频道"
            name="channel_id"
            rules={[{ required: true, message: "请选择文章频道" }]}
          >
            <Select placeholder="请选择文章频道" style={{ width: 400 }}>
              {channelList.map((item) => (
                <Option key={item.id} value={item.id}>
                  {/* value属性选中后   自动收集作为接口提交字段 */}
                  {item.name}
                </Option>
              ))}
              {/* <Option value={1}>推荐</Option> */}
            </Select>
          </Form.Item>
          {/* // 上传图片 */}
          <Form.Item label="封面">
            <Form.Item name="type">
              <Radio.Group>
                <Radio value={1}>单图</Radio>
                <Radio value={3}>三图</Radio>
                <Radio value={0}>无图</Radio>
              </Radio.Group>
            </Form.Item>
            <Upload
              name="image"
              listType="picture-card"
              showUploadList
              action={"http://geek.itheima.net/v1_0/upload"}
              onChange={onChange}
            >
              <div style={{ marginTop: 8 }}>
                <PlusOutlined />
              </div>
            </Upload>
          </Form.Item>

          {/* //内容部分 */}
          <Form.Item
            label="内容"
            name="content"
            rules={[{ required: true, message: "请输入文章内容" }]}
          >
            {/* 富本编辑器 */}
            <ReactQuill
              className="publish-quill"
              theme="snow"
              placeholder="请输入文章内容"
            />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 4 }}>
            <Space>
              <Button size="large" type="primary" htmlType="submit">
                发布文章
              </Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}

export default Publish
