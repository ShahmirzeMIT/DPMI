import { Box } from '@mui/material'
import { stylesLoginPage } from '../../styles/PageStyles/loginPageStyles'
import { Button } from 'antd'
import InputText from '../../reusable/InputText'
import InputPassWord from '../../reusable/InputPassWord'
import { Link } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import ButtonSub from '../../reusable/ButtonSub'
import mainProps from '../Login/mainProps'
import { FaGoogle } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
export default function SignInForm() {
    const {isVerified, email, name, handleVerify, passWord,onSubmit}=mainProps()
  return (
    <Box  >
      <Box >
        <Box sx={{display:'flex',justifyContent:'center',gap:'10px' }}>
          <Box sx={{marginBottom:'20px',width:'44%'}}><Button style={{width:'100%',height:'40px',background:'#4285f4',color:'white'}}><FaGoogle  style={{color:'white',fontSize:'20px'}}/> Log In With Google</Button></Box>
          <Box sx={{marginBottom:'20px',width:'44%'}}><Button style={{width:'100%',height:'40px',background:'#010101',color:'white'}}><FaApple  style={{color:'white',fontSize:'20px'}}/> Log In With Apple</Button></Box>
        </Box>
        <InputText data={name}/>
        <InputText data={email}/>
        <InputPassWord data={passWord}/>

        <Link to="/forgot-password" style={{...stylesLoginPage.frgtPass}}>Forgot Your Password?</Link>
        <Box sx={{margin:'5px 20px'}}>
          {
            isVerified?<></>: <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
            onChange={handleVerify} 
          />  
          }
        </Box>
         <Box onClick={onSubmit}>
          <ButtonSub/>
         </Box>
        
      </Box>

    </Box>
  )
}