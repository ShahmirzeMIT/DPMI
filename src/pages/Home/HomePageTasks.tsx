import { Box } from '@mui/material'
import { Button, Card, Typography } from 'antd'
import { stylesHomePageTask } from '../../styles/PageStyles/homePageStyles'


export default function HomePageTasks() {
  return (
    <Box sx={{...stylesHomePageTask.box}}>
    <Card
      title={<div>
        <p style={{...stylesHomePageTask.text1}}>BUSINESS FOUNDATIONS</p>
        <p  style={{...stylesHomePageTask.text2}}>6 Courses 1 Completed</p>
      </div>
      }
      extra={<Button  style={{...stylesHomePageTask.btn}}>Curriclum</Button>}
      style={{...stylesHomePageTask.card}}
    >
      <Typography style={{...stylesHomePageTask.typography}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, consectetur aspernatur. Laboriosam possimus asperiores natus facere laborum, maiores illum porro?</Typography>
    </Card>
  </Box>
  )
}
