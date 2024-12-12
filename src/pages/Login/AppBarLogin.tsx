
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import { appBarLoginStyle } from '../../styles/PageStyles/appBarLoginStyle';
// import AdbIcon from '@mui/icons-material/Adb';


function AppBarLogin() {
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

          <Box sx={{...appBarLoginStyle.boxButton}}>
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
            <Typography sx={{...appBarLoginStyle.text}}>Don't Have Account</Typography>
            <Button style={{...appBarLoginStyle.button}} onClick={()=>navigate('/sign')}>Sign Up</Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default AppBarLogin;
