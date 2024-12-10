import { Box, IconButton, Menu, MenuItem, Tooltip, Typography } from '@mui/material'
import { Avatar, Button, Divider } from 'antd'
import { arrowTypography, navbarStyles } from '../../styles/LayoutStyles/navbar'
import { BsFillTriangleFill } from "react-icons/bs";
import { MdKeyboardArrowRight } from "react-icons/md";
import AnarRustamov from '../../assets/images/AnarRustamov.jfif'
import { OpenMenuProps } from '../../types/openMenuType';
const settings = ['Account','Profile', 'Prefences', 'Documets','FAQ'];

export default function OpenMenu({anchorElUser,handleCloseUserMenu,handleOpenUserMenu}:OpenMenuProps) {
  return (
    <Box sx={{ flexGrow: 0 ,  position:'relative',overflow:'hidden'}}>
    <Tooltip title="Open settings" >
      <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
        <Avatar alt="Remy Sharp" src={AnarRustamov} />
      </IconButton>
    </Tooltip>
    <Typography  sx={arrowTypography(anchorElUser)}> <BsFillTriangleFill style={{...navbarStyles.arrowIcon }} /></Typography>
    <Menu
      id="menu-appbar"
      anchorEl={anchorElUser}
      sx={{...navbarStyles.openMenu,
        '& MuiMenu-list': {
            padding:"0 importnat",
            overflow:"hidden"
        }
      }}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={Boolean(anchorElUser)}
      onClose={handleCloseUserMenu}
    > <Typography  sx={{...navbarStyles.openTypography}}>Program</Typography>
      <Divider style={{...navbarStyles.divider}}></Divider>
      <Typography sx={{...navbarStyles.openTypography}}>Anar Rustemov</Typography>
      <Divider  style={{...navbarStyles.divider}}></Divider>
      {settings.map((setting) => (
        <MenuItem key={setting} onClick={handleCloseUserMenu}  sx={{...navbarStyles.openMenuItem}}>
          <Typography sx={{fontSize:'14px' }}>{setting} </Typography>
          <Box>  <MdKeyboardArrowRight /> </Box>
        </MenuItem>
      ))}
      <Box sx={{...navbarStyles.horizontalDiveder}}>
        <Button style={{...navbarStyles.openMenuBtn}}>Give FeedBack</Button>
         <Box sx={{...navbarStyles.verticalDivider}}></Box>
        <Button style={{...navbarStyles.openMenuBtn}}>Sign Out</Button>
      </Box>
    </Menu>
  </Box>
  )
}
