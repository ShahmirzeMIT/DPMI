export const styleTaskStatus={
    container:{
        display:"flex",justifyContent:"space-between",background:'#dfd9d2',  width: { xs: "400px", sm: "98%" },
        borderRadius:'1px',height:'60px' ,alignItems:'center',borderBottom:"1px solid white" 
    },
    flex:{
        display:"flex",gap:'20px',alignItems:'center'
    },
    cardMedia:{
        height: 35 ,marginLeft:'30px',width:'35px',borderRadius:'50%'
    },
    typography:{
        fontSize:'14px',
    },
    statusBox:{
        marginLeft:'-30px'
    },
    checkStyle:{
        borderRadius:'50%',background:'green',padding:'5px',fontSize:'20px',color:'white',
        cursor:'pointer',
        
    },
    arrowStyle:{
        borderRadius:'50%',background:'#fff',padding:'5px',fontSize:'20px',
        transition:'all 0.3s ease-in-out',
        cursor:'pointer',
        '&:hover':{
            cursor:'pointer',
            transform:'scale(1.1)'
        }
    },
    transitionBox:{
        transition:'all 0.3s ease-in-out','&:hover':{transform:'scale(1.3)'}
    }
}