import { Form, Input } from 'antd'


export default function InputPassWord() {
  return (
    <Form.Item
    layout="vertical"
    name="username"
    label="Username"
    style={{width:'90%',margin:'0 auto'}}
    rules={[
      {
        required: true,
        message: 'Please input your username!',
      },
    ]}
  >
      <Input.Password />
  </Form.Item>
  )
}
