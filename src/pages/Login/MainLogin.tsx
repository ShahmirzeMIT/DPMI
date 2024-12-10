import { Box } from '@mui/material';
import InputText from '../../reusable/InputText';
import InputPassWord from '../../reusable/InputPassWord';
// import { useState } from 'react';
// import ReCAPTCHA from "react-google-recaptcha";
// declare module 'react-google-recaptcha' {
//   const ReCAPTCHA: any;
//   export default ReCAPTCHA;
// }

export default function MainLogin() {
  // const [isVerified, setIsVerified] = useState(false);

  // reCAPTCHA doğrulama funksiyası
  // const handleVerify = (token:any) => {
  //   console.log("reCAPTCHA token:", token);
  //   setIsVerified(true);
  // };
  return (
    <Box 
      sx={{
        backgroundImage: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        minHeight: '748px',
        height: '100%',
        display:'flex',
        alignItems:'center'
      }}
    >
      <Box sx={{width:"40%",margin:"0px auto",padding:'100px 0',boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",borderRadius:'5px'}}>
        <InputText/>
        <InputPassWord/>
      </Box>

      {/* <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Google reCAPTCHA</h1> */}

      {/* Google reCAPTCHA */}
      {/* <ReCAPTCHA
        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI" // Google reCAPTCHA Site Key
        onChange={handleVerify}
      /> */}

      {/* <button
        disabled={!isVerified} // Yalnız doğrulandıqdan sonra aktiv olur
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: isVerified ? "#007bff" : "#ccc",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: isVerified ? "pointer" : "not-allowed",
        }}
      >
        Submit
      </button> */}
    {/* </div> */}
    </Box>
  );
}
