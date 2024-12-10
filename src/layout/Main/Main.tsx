import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'


export default function Main() {
  return (
    <Content  style={{
      minHeight:500,
      width:"80%",
      height:"80%",
      margin:"30px auto"
    }}>
      <Outlet/>
    </Content>
  )
}
