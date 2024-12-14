import { Box } from "@mui/material";
import { Avatar, Card, Divider, Space, Typography } from "antd";
import Bookmark from "./BookMark";
import { MdLock } from "react-icons/md";
// Status mapping with color
const status = [
  {
    status: "ongoing",
    color: '#9557ec',
    text:"Resume",
    lessonType:"Lesson Completed"

  },
  {
    status: "completed",
    color: '#ff4d63',
    text:"Review",
    lessonType:"Lesson Completed"

  },
  {
    status: "new",
    color: '#0dd037',
    text:"Start",
    lessonType:"Lessons"

  },
  {
    status: "locked",
    color: '#dfd9d2',
     text:"Locked",
     lessonType:"Lessons"
  },
  {
    status: "A",
    color: '#dfd9d2',
    text:"Locked",
    lessonType:"Lessons"
  },
];

export interface CourseCardProps {
  data: {
    status: string;
    courseName?:string
    content?:string
    iconUrl?:string
    fkCertificateId?:string
  };
}

export default function CourseCard({ data }: CourseCardProps) {
  const statusColor = status.find(item => item.status === data.status)?.color || '#dfd9d2'; 

  return (
    <Space direction="vertical" size={16} style={{ position: 'relative', margin: '20px 0' }}>
      <Card
        title={
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              height: "80px",
            }}
          >
            <Box sx={{borderRadius:'50%', background:'#c0b8ae',width:'50px',height:'50px',textAlign:'center',verticalAlign:'middle',display:'flex',alignItems:'center',justifyContent:'center'}}>
                {
                    data.status=='locked'?
                    <MdLock/>:   <Avatar src={data.iconUrl} />
                }
            </Box>
            <Box sx={{ width: '90%', wordBreak: "break-word" }}>
              <h3
                style={{
                  margin: '0 15px',
                  fontSize: "25px",
                  textAlign: "left",
                  whiteSpace: "normal", 
                  lineHeight:'28px',
                  fontWeight: '600',
                  color:'#c0b8ae'// Allow the text to wrap
                }}
              >
                {data.courseName}
              </h3>
            </Box>
          </Box>
        }
        extra={
          <Box sx={{ position: "absolute", top: "0px", right: "10px" }}>
            <Bookmark />
          </Box>
        }
        style={{
          minWidth: 540,
          width: '540px',
          position: "relative",
          minHeight: 220,
        }}
      >
        <Typography style={{color:'#c0b8ae',height:"56px",fontSize:'15px',lineHeight:'17px'}}>{data.content}</Typography>
        {/* <Button style={{ height: '20px', fontSize: '10px', textTransform: 'uppercase',color:'#c0b8ae' }}>Entrepreneurship</Button> */}
      </Card>

      {/* Status Box */}
      <Box
          sx={{
            background: statusColor, // Dynamic background color
            width: '99.5%',
            height: '70px',
            position: 'absolute',
            bottom: '-10px',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            padding: '5px 15px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
  <Box sx={{ lineHeight: 1 }}> {/* Ensures no extra space */}
  <Box>
  <Typography
    style={{
      fontSize: '12px',
      color: 'white',
      textTransform: 'uppercase',
      margin: 0, // Remove any margin
      padding: 0, // Remove any padding
      lineHeight: '1', // Set line height to 1 for no extra spacing
    }}
  >
      { status.find((item) => item.status === data.status)?.lessonType}
  </Typography>
  <Typography
    style={{
      fontSize:data.status=="new" || data.status=="locked" || data.status=="A"?'44px': '12px',
      color: 'white',
      fontWeight: '600',
      margin: 0, // Remove an y margin
      padding: 0, // Remove any padding
      lineHeight: '1', // Ensures no extra space
    }}
  >
    {
        data.status=="ongoing" || data.status=="completed"?
        <>
        <span style={{fontSize: '44px',
            color: 'white',
            fontWeight: '600',
            margin: 0, // Remove any margin
            padding: 0, // Remove any padding
            lineHeight: '1'}}>5</span>
             <span style={{ fontSize: '18px' }}>/</span>
        </>
        
             :''
    }
    
      6
  </Typography>
</Box>


  </Box>
  {
            data.status=="completed"?<Box>
            <Typography style={{
      fontSize: '12px',
      color: 'white',
      textTransform: 'uppercase',
      margin: 0, // Remove any margin
      padding: 0, // Remove any padding
      lineHeight: '1', // Set line height to 1 for no extra spacing
   }}>
               Completed On
            </Typography>
            <Typography style={{ color: 'white', fontSize: '19px',textTransform: 'uppercase',fontWeight:'600' }}>October 22 2024</Typography>
          </Box>:""
        }
       <Box
            sx={{
                display: 'flex',
                alignItems: 'center', // Vertical alignment
                justifyContent: 'center', // Horizontal alignment
                padding: '0 20px', // Ensures left and right padding
                height: '100px', // Define the height to properly center vertically
                position: 'relative', // Allows further positioning if needed
            }}
            >
            <Divider
                type="vertical"
                style={{
                height: '55px',
                background: 'white',
                }}
            />
            <Box sx={{marginLeft:'20px'}}></Box>
            <Typography
                style={{
                color: 'white',
                fontSize: '25px',
                textAlign: 'center', // Centers text within the Typography itself
                textTransform: 'uppercase',
                fontWeight: 'bold',
                }}
            >
               { status.find((item) => item.status === data.status)?.text}
            </Typography>
            </Box>


        {/* </Box> */}
</Box>


    </Space>
  );
}
