import { Input, Typography } from 'antd'
import { useEffect, useState } from 'react';


interface InputPassWordTypes {
  data: {
    value: string;
    name: string;
    label: string;
    message: string;
    required?: boolean;
    email?: boolean;
    status?:boolean;
    onChange: (e: { name: string; value: string }) => void;
  };
}
export default function InputPassWord({data}: InputPassWordTypes) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Set initial props from parent data
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProps((prev) => ({
      ...prev,
      value,
    }));

  
    data.onChange({ name, value });

   
  };

  return (
  //   <Form.Item
  //   layout="vertical"
  //   name={props.name}
  //   label={props.label}
  //   style={{ width: '90%', margin: '10px auto' }}
  //   rules={[
  //     {
  //       required: props.required,
  //       message: props.message,
  //     },
  //   ]}
  // >
      <>
       <Typography    style={{width: '89%', display:'flex',alignItems:'center',margin:'5px auto'}}> {props.label}</Typography>
      <Input.Password
          style={{ height: '50px' ,width: '90%', display:'flex',alignItems:'center',margin:'20px auto'}}
          onChange={onChange} // Handle input change
          value={props.value} // Maintain the value from the state
          name={props.name}
          status={props.status? 'error':undefined}
        />
      {props.status && (
            <div style={{ color: 'red',width: '90%', display:'flex',alignItems:'center',margin:'5px auto' }}>{props.message}</div>
          )}
      </>
    
    
    
  // </Form.Item>
  )
}
