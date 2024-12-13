import { Box, IconButton } from '@mui/material'
import { Divider, Typography } from 'antd'
import { Footer } from 'antd/es/layout/layout'


export default function Bottom() {
  return (
    <Footer style={{background:"#fff",height:'10%', minHeight:'200px'}}>
        <Box sx={{ width:"80%", margin:"0 auto"}}>
        <IconButton
              size="large"
              aria-label="account of current user"
              // aria-controls="menu-appbar"
              // aria-haspopup="true"
              // onClick={handleOpenNavMenu}
              color="inherit"
            >
             Logo
            </IconButton>
            <Divider></Divider>
            <Typography  color="text.secondary" style={{textAlign:'center'}}>
                {'Copyright © '}
                {/* <Link color="inherit" href="https://mui.com/">
                Your Website
                </Link>{' '} */}
                 {'2024-'}
                {new Date().getFullYear()}
               
                {'.'}
            </Typography>
        </Box>
    </Footer>
  )
}
