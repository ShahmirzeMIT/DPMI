import { Box } from '@mui/material';
import InputText from '../../reusable/InputText';
import InputPassWord from '../../reusable/InputPassWord';
import ButtonSub from '../../reusable/ButtonSub';
import { Link } from 'react-router-dom';
import ReCAPTCHA from "react-google-recaptcha";
import mainProps from './mainProps';
import { stylesLoginPage } from '../../styles/PageStyles/loginPageStyles';

export default function MainLogin() {
  const {isVerified, email,  handleVerify, passWord}=mainProps()

  return (
    <Box  sx={{...stylesLoginPage.mainBox}}>
      <h1  style={{fontSize:'50px'}}>Login to Logo</h1>
      <Box sx={{...stylesLoginPage.formBox}}>
        <InputText data={email}/>
        <InputPassWord data={passWord}/>
        <br />
        <Link to="/forgot-password" style={{...stylesLoginPage.frgtPass}}>Forgot Your Password?</Link>
        <Box sx={{margin:'5px 20px'}}>
          {
            isVerified?<></>: <ReCAPTCHA
            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" 
            onChange={handleVerify} 
          />  
          }
        </Box>
         
        <ButtonSub/>
      </Box>

    </Box>
  );
}
