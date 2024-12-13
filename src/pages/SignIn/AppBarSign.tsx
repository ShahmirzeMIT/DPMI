import { AppBar, Box, Container, IconButton, Toolbar,Typography } from '@mui/material';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

export default function AppBarSign() {
 
    const navigate=useNavigate()
    return (
        <AppBar position="static" sx={{background:'white'}}>
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'black',
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
    
              <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                //   onClick={handleOpenNavMenu}
                  color="inherit"
                >
                   LOGO
                </IconButton>
                
              </Box>
              {/* <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} /> */}
              <Typography
                variant="h5"
                noWrap
                component="a"
                href="#app-bar-with-responsive-menu"
                sx={{
                  mr: 2,
                  display: { xs: 'flex', md: 'none' },
                  flexGrow: 1,
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  // fontSize:{xs:'10px',md:'12px',sm:'14px'}, 
                  textDecoration: 'none',
                }}
              >
                LOGO
              </Typography>
              <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              </Box>
              <Box sx={{display:'flex',alignItems:'center',justifyContent:'space-between'}}>
                <Typography sx={{color:'black',marginRight:'20px', fontSize:{xs:'10px',md:'14px',sm:'16px'}}}>you already Have Account</Typography>
                <Button style={{
                    backgroundImage: "linear-gradient(to top, #1e3c72 0%, #1e3c72 1%, #2a5298 100%)",
                    color: "white",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                   fontSize:12,
                   fontWeight:'normal'
                }} onClick={() => navigate('/login')}>Log In</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}