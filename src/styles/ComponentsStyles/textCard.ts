export const stylesTextCard={
    typography:{
        color: 'text.secondary', mb: 1.5,
         fontSize:'15px'
    },
    cardActions:{
        display:"flex",
        justifyContent:"center"
    }
}

export const button = (btn:boolean | undefined) => ({
        display:btn?'block':'none',
        borderRadius:"20px",
        textAlign: 'center' as 'center',
        boxShadow: "-2px 2px 9px 0px rgba(0,0,0,0.75)",
        fontSize:'14px'
  });