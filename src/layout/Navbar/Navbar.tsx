import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import { arrowTypography, navbarStyles } from '../../styles/LayoutStyles/navbar';
import { BsFillTriangleFill } from "react-icons/bs";
import OpenMenu from './OpenMenu';
import { Link } from 'react-router-dom';
const pages = ['Home', 'Courses', 'Ai Advisor'];


function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static" sx={{...navbarStyles.appbar,}}>
      <Container maxWidth="xl"  sx={{
      boxShadow: 'none',
    }}>
      {/* //Birinci Menyu */}
        <Toolbar disableGutters>
         
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{...navbarStyles.typography}}
          >
            LOGO
          </Typography>
          <Typography  sx={arrowTypography(anchorElNav)}> <BsFillTriangleFill style={{...navbarStyles.arrowIcon }} /></Typography>
          <Box sx={{...navbarStyles.box}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
             Logo
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{...navbarStyles.menu }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu} >
                  <Typography sx={{ textAlign: 'center' }}> <Link to={`/${page.toLocaleLowerCase()}`} style={{color:'black',textDecoration:'none'}}>{page}</Link></Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{...navbarStyles.btn, }}
              >
                <Link to={`/${page.toLocaleLowerCase()}`} style={{color:'white'}}>{page}</Link>
                {/* {page} */}
              </Button>
            ))}
          </Box>


        {/* //Open  Menu */}
        <OpenMenu anchorElUser={anchorElUser} handleCloseUserMenu={handleCloseUserMenu} handleOpenUserMenu={handleOpenUserMenu} />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
