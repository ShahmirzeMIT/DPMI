
import { Box } from '@mui/material';
import '../styles/ComponentsStyles/DividerStyle.css';
import FilterGroupFlat from './FilterGroupFlat';
export default function DividerComp() {
  return (
    <Box >
      <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:'40px'}}>
        <Box sx={{width:'90px'}}></Box>
        <h1 style={{color:'#c0b8ae'}}>Courses</h1>
        <Box><FilterGroupFlat/></Box>
      </Box>
        <div className="section-header">
          <div className="line"></div>
          <div className="diamond"></div>
          <div className="line"></div>
        </div>
    </Box>
        
    
    
  )
}
