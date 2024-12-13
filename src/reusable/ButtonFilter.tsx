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
        minWidth: "120px",
        margin: "3px",
        background: isActive ? "#ffbe00" : "",
        color: isActive ? "white" : "#c0b8ae",
      }}
    >
      {data.name}
    </Button>
  );
}
