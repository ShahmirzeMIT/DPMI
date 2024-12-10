import { Form, Input } from 'antd';
import { useEffect, useState } from 'react';

interface InputTextProps {
  data: {
    value: string;
    name: string;
    label: string;
    message: string;
    required?: boolean;
    email?: boolean;
    onChange: (e: { name: string; value: string }) => void;
  };
}

export default function InputText({ data }: InputTextProps) {
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
    <Form.Item
      layout="vertical"
      name={props.name}
      label={props.label}
      style={{ width: '90%', margin: '10px auto' }}
      rules={[
        {
          required: props.required,
          message: props.message,
        },
      ]}
    >
      <Input
        style={{ height: '50px' }}
        onChange={onChange} // Handle input change
        value={props.value} // Maintain the value from the state
        name={props.name}
      />
      
    </Form.Item>
  );
}
