import { Box } from '@mui/material'

import SelectSingle from '../../reusable/SelectSingle';
export default function Third() {
  return (
    <Box sx={{width:'100%', minWidth:250,height:'100%',lineHeight:'60px',marginTop:'10px'}}>
    <SelectSingle data={{
       api: "",
       name: "firstCarousel",
       value: "2",
       label: "How many years of work experience do you have?",
       payload:{},
       status:"",
       onChange: (E:any)=>{
         console.log(E);
         
       }
    }}/>
     <SelectSingle data={{
       api: "",
       name: "firstCarousel",
       value: "2",
       label: "Your role can best be described as…",
       payload:{},
       status:"",
       onChange: (E:any)=>{
         console.log(E);
         
       }
    }}/>
 </Box>
  )
}