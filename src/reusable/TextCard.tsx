import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Button, Divider } from "antd";
import { TextCardProps } from "../types/textCardTypes";
import { button, stylesTextCard } from "../styles/ComponentsStyles/textCard";



export default function TextCard({data}:TextCardProps) {
  return (
    <Card sx={{ mminWidth: 285}}>
      <CardContent>
        <Typography variant="h5" component="div" >
            {data.title}
        </Typography>
        <Divider style={{margin:"10px 0"}}></Divider>
        <Typography sx={{...stylesTextCard.typography}}>
            {data.text}
        </Typography>
      </CardContent>
      <CardActions sx={{...stylesTextCard.cardActions}}> 
        <Button size="small" style={button(data.btn)}>Contact Us</Button>
      </CardActions>
    </Card>

  )
}
