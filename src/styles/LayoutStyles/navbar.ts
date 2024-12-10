
export const navbarStyles = {
  appbar: {
    backgroundColor: "transparent",
    height: '60px',
    boxShadow: "none",
  },
  typography: {
    mr: 2,
    display: { xs: 'none', md: 'flex' },
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none',
  },
  box: {
    flexGrow: 1, 
    display: { xs: 'flex', md: 'none' },
  },
  menu: {
    display: { xs: 'block', md: 'none' },
  },
  btn: {
    my: 2, 
    color: 'white', 
    display: 'block',
    '&:hover': { 
      borderRadius: "31px",
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
    },
  },
  typographyLogo: {
    mr: 2,
    display: { xs: 'flex', md: 'none' },
    flexGrow: 1,
    fontFamily: 'monospace',
    fontWeight: 700,
    letterSpacing: '.3rem',
    color: 'inherit',
    textDecoration: 'none', 
  },
  arrowIcon:{
    fontSize:'20px',background:'transparent',borderRadius:'50%',width:'35px',height:'15px',display:'flex',alignItems:'center',justifyContent:'center'
  },
  openMenu:{
    marginTop: '45px',
    marginLeft: '-5px',
    paddingBottom:'0px',
    overflow:'hidden',
  },
  openTypography:{
    fontSize:'14px',fontWeight:"600",marginLeft:'14px'
  },
  divider:{
    margin:'10px 0'
  },
  openMenuItem:{
    display:"flex",
    justifyContent: "space-between",
    width:"200px"
  },
  horizontalDiveder:{
    display:'flex',justifyContent:'space-between', position:'relative', borderTop:'1px solid rgba(5, 5, 5, 0.06)',marginTop:'10px'
  },
  openMenuBtn:{
    // heigth:'40px',
    border:'none',
    width:'50%',
    fontSize:'12px',
    boxShadow:'none'
  },
  verticalDivider:{
    border:'0.5px solid rgba(5, 5, 5, 0.06)',position:'absolute',left:"50%",height:'39px',zIndex:'99'
  }
};

// Separate function outside of navbarStyles
export const arrowTypography = (anchorElUser: null | HTMLElement) => ({
  textAlign: 'center',
  position: 'absolute',
  top: '50px',
  zIndex: '3',
  display: anchorElUser ? 'block' : 'none',
});
