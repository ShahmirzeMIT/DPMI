import { AppBar, Box, Container, IconButton, Toolbar,Typography } from '@mui/material';
import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';
import { appBarLoginStyle } from '../../styles/PageStyles/appBarLoginStyle';

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
                sx={{...appBarLoginStyle.tyopgraphyFirst}}
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
                sx={{...appBarLoginStyle.tyopgraphyFirst}}
              >
                LOGO
              </Typography>
              <Box sx={{...appBarLoginStyle.boxButton }}>
              </Box>
              <Box sx={{...appBarLoginStyle.flex}}>
                <Typography sx={{...appBarLoginStyle.text}}>you already Have Account</Typography>
                <Button style={{...appBarLoginStyle.button}} onClick={() => navigate('/login')}>Log In</Button>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
}
