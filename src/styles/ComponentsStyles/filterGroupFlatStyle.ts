export const filterGroupFlatStyle={
    container:{
        display:'flex',justifyContent:'center',alignItems:'center' ,position:'relative'
    },
    radioGroup:(position:string)=>({
            background:position=="start"?"#c0b8ae":"",border:'1px solid #c0b8ae'
    }),
    radioGroup1:(position:string)=>({
        position:'absolute' as 'absolute',top:'-5px',fontSize:'16px',color:position=="start" ?'white':'inherit' 
    }),
    radioGroup2:(position:string)=>({
       marginLeft:'13px',fontSize:'16px',marginTop:'5px',color:position=="start" ?'white':'inherit'
    }),
    radioButton:(position:string)=>({
       background:position=="end"?"#c0b8ae":"",border:'1px solid #c0b8ae'
    }),
    icon:(position:string)=>({
      color:position=="end" ?'white':'inherit'
    })
}