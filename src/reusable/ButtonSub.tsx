import { Button, Form } from "antd";
export default function ButtonSub() {
  return (
    <Form.Item label={null} style={{width:"90%",margin:'0 auto'}}>
      <Button type="primary" style={{width:"100%",margin:'20px auto',height:'50px'}}>Submit</Button>
    </Form.Item>
  )
}
