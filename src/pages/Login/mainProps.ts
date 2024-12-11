import { useState } from 'react';
import { useAuth } from '../../Auth/AutchContext';
import { useNavigate } from 'react-router-dom';

export default function mainProps() { 
  const {setAuthToken}=useAuth()
  const navigate = useNavigate();
  const validateEmail = (value: string) => {
   
    
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if ( emailPattern.test(value)) {
        setEmail((prev) => ({
            ...prev,
            status: false,
          }))
     
    } 
    else {
        setEmail((prev) => ({
            ...prev,
            status: true,
            message: 'Please enter a valid email!', // Show error message
          }));
    }
   
  };

  const handleVerify = (token: any) => {
    console.log('reCAPTCHA token:', token);
    setIsVerified(true);
  };

  const emailChange = (e: { name: string; value: string }) => {
    setEmail((prev) => ({
      ...prev,
      value: e.value, // Only update the value
    }));
    validateEmail(e.value); // Call validation
  };


  const nameChange = (e: { name: string; value: string }) => {
    setName((prev) => ({
      ...prev,
      value: e.value, // Only update the value
    }));
  };

  const validatePassword = (value: string) => {
    // Regular expression for password validation
    const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]{10,}$/;
  
    if (!value) {
      setPassWord((prev) => ({
        ...prev,
        status: true,
        message: 'Password is required!',
      }));
    } else if (!passwordPattern.test(value)) {
      setPassWord((prev) => ({
        ...prev,
        status: true,
        message:
          'Password must include at least 1 digit, 1 special character, 1 uppercase letter, 1 lowercase letter, and be at least 10 characters long.',
      }));
    } else {
      setPassWord((prev) => ({
        ...prev,
        status: false,
        message: '', // Clear the error message
      }));
    }
  };

  const passWordChange = (e: { name: string; value: string }) => {
    setPassWord((prev) => ({
      ...prev,
      value: e.value, // Only update the value
    }));
    validatePassword(e.value);
  };

  const [isVerified, setIsVerified] = useState(false);

  const [email, setEmail] = useState({
    name: 'email',
    value: '',
    label: 'Email',
    email: true,
    required: true,
    message: 'Please input your email!',
    onChange: emailChange,
    status: false,
  });
  const [name, setName] = useState({
    name: 'name',
    value: '',
    label: 'Name',
    email: true,
    required: true,
    message: 'Please input your email!',
    onChange: nameChange,
    status: false,
  });

  const [passWord, setPassWord] = useState({
    name: 'password',
    value: '',
    label: 'Password',
    email: true,
    required: true,
    message: 'Please input your password!',
    onChange: passWordChange,
    status: false,
  });

  const onSubmit=() => {
    setAuthToken(passWord.value)
    navigate('/home')
    console.log('Email:', email);
    console.log('Password:', passWord);
  }

  return {
    isVerified,
    setIsVerified,
    email,
    setEmail,
    handleVerify,
    emailChange,
    passWord,
    onSubmit,
    name, setName
  };
}
