import { Box } from '@mui/material';
import InputText from '../../reusable/InputText';
import InputPassWord from '../../reusable/InputPassWord';
import ButtonSub from '../../reusable/ButtonSub';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import ReCAPTCHA from "react-google-recaptcha";

export default function MainLogin() {
  const [isVerified, setIsVerified] = useState(false);


  const handleVerify = (token:any) => {
    console.log("reCAPTCHA token:", token);
    setIsVerified(true);
  };
  return (
    <Box 
      sx={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: '748px',
        height: '100%',
        display:'flex',
        alignItems:'center',
        flexDirection:'column',justifyContent:'space-around'
      }}
    >
      <h1  >Login to Logo</h1>
      <Box sx={{minWidth:"400px",width:"40%",margin:"0px auto",padding:'100px 0',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:'5px'}}>
        <InputText data={
            {
              name:'email',
              value:'',
              label:'Email',
              email:true,
              required:true,
              message:'Please input your email!',
              onChange:(e:any)=>{console.log(e);
              }
            }
          
          }/>
        <InputPassWord data={{
          name:'password',
          value:'',
          label:'Password',
          email:true,
          required:true,
          message:'Please input your password!',
          onChange:(e:any)=>{console.log(e);
          }
        }}/>
        <br />
        <Link to="/forgot-password" style={{margin:'50px 35px'}}>Forgot Your Password?</Link>
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
