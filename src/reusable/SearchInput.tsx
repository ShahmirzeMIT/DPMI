import { Typography } from "antd";
import Search from "antd/es/input/Search";
import { useEffect, useState } from "react";
import { searchInputStyle } from "../styles/ComponentsStyles/searchInputStyle";
import { SearchInputProps } from "../types/searchInputType";



export default function SearchInput({ data }: SearchInputProps) {
  const [props, setProps] = useState(data);

  useEffect(() => {
    setProps(data); // Update state when parent data changes
  }, [data]);

  const onSearch = (value: string) => {
    setProps((prev) => ({
      ...prev,
      value,
    }));
    data.onChange({ name: props.name, value });
  };

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
      <Typography style={{...searchInputStyle.typography}}  >
        {props.label}
      </Typography>
      <Search
        style={{...searchInputStyle.search}}
        onChange={onChange}
        onSearch={onSearch} // Directly pass the search value
        // value={props.value}
        allowClear
        name={props.name}
        status={props.status ? "error" : undefined}
      />
      {props.status && (
        <div style={{...searchInputStyle.message}} >
          {props.message}
        </div>
      )}
    </>
  );
}
