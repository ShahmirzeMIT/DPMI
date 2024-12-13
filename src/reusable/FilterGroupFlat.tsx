import { Box } from "@mui/material";
import { useState } from "react";
import {   Radio, Tooltip } from 'antd';
import { LuListFilter } from "react-icons/lu";
import { filterGroupFlatStyle } from "../styles/ComponentsStyles/filterGroupFlatStyle";

export default function FilterGroupFlat() {
    const [position, setPosition] = useState('start');
  return (
    <Box sx={{...filterGroupFlatStyle.container}}>
      <Radio.Group value={position} onChange={(e) => setPosition(e.target.value)}>
          <Radio.Button value="start"  style={{...filterGroupFlatStyle.radioGroup(position)}}>
          <Tooltip title="Flat List">
            <span style={{...filterGroupFlatStyle.radioGroup1(position)}}>A</span>
            <span style={{...filterGroupFlatStyle.radioGroup2(position)}}>Z</span>
            </Tooltip>
          </Radio.Button>
          <Radio.Button value="end" style={{...filterGroupFlatStyle.radioButton(position)}}>
            <Tooltip title="Grouped by Topic"><span style={{fontSize:'16px'}}><LuListFilter  style={{...filterGroupFlatStyle.icon(position)}}/></span></Tooltip>
          </Radio.Button>
        </Radio.Group>
    </Box>
  )
}
