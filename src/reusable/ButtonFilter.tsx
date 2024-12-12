import { Button } from 'antd'
interface ButtonFilterProps {
    data:{
        name:string;
        label:string;
        key:string;
        onChange: (e: { name: string; key: string }) => void;
    }
   
}
export default function ButtonFilter({data}:ButtonFilterProps) {
    const onClick = () => {
        data.onChange({ name: data.name, key: data.key });
    }
  return (
    <Button onClick={onClick} style={{minWidth:'120px',margin:'3px'}}>{data.name}</Button>
  )
}
