import { Box, CardMedia } from "@mui/material";
import {  Typography } from "antd";
import Anar from '../assets/images/AnarRustamov.jfif'
import { FaArrowRightLong } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { styleTaskStatus } from "../styles/ComponentsStyles/taskStatusStyle";
export default function TaskStatus() {
const status=false
  return (
    <Box>
      <Box sx={{...styleTaskStatus.container}}>
        <Box sx={{...styleTaskStatus.flex}}>
            <CardMedia
              sx={{...styleTaskStatus.cardMedia}}
              image={Anar}
              title="green iguana"
            />
            <Typography style={{...styleTaskStatus.typography}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, officiis.</Typography>
        </Box>
        <Box >
          <Box style={{...styleTaskStatus.statusBox}}> 
            {
              status?(
                <FaCheck style={{...styleTaskStatus.checkStyle}}/>
              ):(
                <Box sx={{...styleTaskStatus.transitionBox}}> <FaArrowRightLong  style={{...styleTaskStatus.arrowStyle}} /></Box>
               
              )
            }
          </Box>
        </Box>
    </Box>
    </Box>
    
  )
}
