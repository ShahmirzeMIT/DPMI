import { Box } from '@mui/material';
import InputText from '../../reusable/InputText';
import InputPassWord from '../../reusable/InputPassWord';
import ButtonSub from '../../reusable/ButtonSub';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import mainProps from './mainProps';
import { stylesLoginPage } from '../../styles/PageStyles/loginPageStyles';
import { Button } from 'antd';
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function MainLogin() {
  const { email,  handleVerify, passWord,onSubmit}=mainProps()
  return (
    <Box  sx={{...stylesLoginPage.mainBox}}>
      <h1  style={{fontSize:'50px'}}>Login to Logo</h1>
      <Box sx={{...stylesLoginPage.formBox}}>
        <Box sx={{display:'flex',justifyContent:'center',gap:'10px' }}>
          <Box sx={{marginBottom:'20px',width:'44%'}}><Button style={{width:'100%',height:'40px',background:'#4285f4',color:'white'}}><FaGoogle  style={{color:'white',fontSize:'20px'}}/> Log In With Google</Button></Box>
          <Box sx={{marginBottom:'20px',width:'44%'}}><Button style={{width:'100%',height:'40px',background:'#010101',color:'white'}}><FaApple  style={{color:'white',fontSize:'20px'}}/> Log In With Apple</Button></Box>
        </Box>
        
        <InputText data={email}/>
        <InputPassWord data={passWord}/>
        <br />
        <Link to="/forgot-password" style={{...stylesLoginPage.frgtPass}}>Forgot Your Password?</Link>
        <Box sx={{margin:'5px 20px'}}>
          {/* {
            isVerified?<></>:  */}
            <ReCAPTCHA
            sitekey="6LddrZkqAAAAAL4ukJpzELXXl9-mdwRDMue3Y-fY" 
            onChange={handleVerify} 
          />  
          {/* // } */}
        </Box>
         <Box onClick={onSubmit}>
          <ButtonSub/>
         </Box>
      </Box>
    </Box>
  );
}
