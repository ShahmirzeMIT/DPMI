import { Input, Typography } from 'antd'
import { useEffect, useState } from 'react';
import { InputPassWordTypes } from '../types/inputPassword';
import { inputTextStyle } from '../styles/ComponentsStyles/inputTextStyle';

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

      <>
       <Typography    style={{...inputTextStyle.tyography}}> {props.label}</Typography>
      <Input.Password
          style={{...inputTextStyle.input}}
          onChange={onChange} // Handle input change
          value={props.value} // Maintain the value from the state
          name={props.name}
          status={props.status? 'error':undefined}
        />
      {props.status && (
            <div style={{...inputTextStyle.message}}>{props.message}</div>
          )}
      </>
  )
}
