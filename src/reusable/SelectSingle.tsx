import { Box } from '@mui/material';
import { Select, Typography } from 'antd';
import { useEffect, useState } from 'react';
import { selectSingleStyle } from '../styles/ComponentsStyles/selectSingleStyle';
import { Option, SelectSingleProps } from '../types/selectSingleType';

const options: Option[] = [
  { name: '1', value: 'Not Identified', key: '1' },
  { name: '2', value: 'Closed', key: '2' },
  { name: '3', value: 'Communicated', key: '3' },
  { name: '4', value: 'Identified', key: '4' },
  { name: '5', value: 'Resolved', key: '5' },
  { name: '6', value: 'Cancelled', key: '6' },
];


export default function SelectSingle({ data }: SelectSingleProps) {
  const [props, setProps] = useState(data);

  const updatedOptions = options.map((option: Option) => ({
    ...option,
    name: props.name,
  }));

  useEffect(() => {
    setProps(data);
  }, [data]);

  const handleSelectChange = (value: string) => {
    const selectedOption = options.find((option) => option.key === value);

    if (selectedOption) {
      data.onChange(selectedOption); // Notify the parent component of the selected option
      setProps((prev) => ({
        ...prev,
        value: selectedOption.value, // Update the value as a string
      }));
    }
  };

  return (
    <Box sx={{...selectSingleStyle.container}}>
      <Typography  style={{...selectSingleStyle.typography}} >
        {props.label}
      </Typography>
      <Select
        value={props.value}
        status={props.status || ""} // Ensure status is one of the valid values
        showSearch
        disabled={props.disabled}
        style={{...selectSingleStyle.select}}
        placeholder="Search to Select"
        optionFilterProp="label"
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? '').toLowerCase().localeCompare((optionB?.label ?? '').toLowerCase())
        }
        onChange={handleSelectChange}
        options={updatedOptions.map((option) => ({
          value: option.key,
          label: option.value,
        }))}
      />
    </Box>
  );
}
