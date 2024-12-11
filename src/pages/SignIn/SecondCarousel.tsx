import { Box } from '@mui/material'
import SelectSingle from '../../reusable/SelectSingle';

export default function SecondCarousel() {
  return (
    <Box sx={{width:'100%', minWidth:250,height:'100%',lineHeight:'60px',marginTop:'10px'}}>
    <SelectSingle data={{
       api: "",
       name: "firstCarousel",
       value: "2",
       label: "What is your highest level of COMPLETED education?",
       payload:{},
       status:"",
       onChange: (E:any)=>{
         console.log(E);
         
       }
    }}/>
 </Box>
  )
}
