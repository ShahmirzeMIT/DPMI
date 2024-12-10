export const stylesHomePage={
    textCard:{
        display: "flex",
        flexDirection: { xs: "column", sm: "column" , md: "row" , lg: "row" },
        justifyContent: "space-between",
        gap: "20px",
        padding: "20px",
      
    },
    secondBox:{
        width: {
            xs: "350px",
            sm: "98%",
            md: "48%",
            lg: "45%", 
          },
        
    }
}

export const stylesHomePageTask={
    box:{
        width: { xs: "350px", sm: "98%" } 
    },
    btn:{
         color: "black" ,background:'white',borderRadius:'20px', fontWeight:'600',
         boxShadow:" rgba(0, 0, 0, 0.1) 0px 4px 12px"
    },
    card:{
        width: "100%", border:'none'
    },
    text1:{
        marginTop:'15px', 
        fontSize:'18px',
    },
    text2:{
        fontSize:'13px', 
        fontWeight:'normal',
    },
    typography:{
        fontSize:'14px', 
        fontWeight:'normal', 
    }
}