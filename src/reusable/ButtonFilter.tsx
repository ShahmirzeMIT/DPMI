import { Button } from "antd";

interface ButtonFilterProps {
  data: {
    name: string;
    label: string;
    key: string;
    onChange: () => void;
  };
  isActive: boolean;
}

export default function ButtonFilter({ data, isActive }: ButtonFilterProps) {
  const onClick = () => {
    data.onChange();
  };

  return (
    <Button
      onClick={onClick}
      style={{
        border:'1.4px solid #c0b8ae',
        // minWidth: "120px",
        margin: "3px",
        background: isActive ? "#ffbe00" : "",
        color: isActive ? "white" : "#c0b8ae",
        fontSize:'15px',
        textTransform:'uppercase',
        padding: "6px 8px 4px"
      }}
    >
      {data.name}
    </Button>
  );
}
