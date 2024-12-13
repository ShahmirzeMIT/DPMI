import { Box } from "@mui/material";
import { Avatar, Button, Card, Divider, Space, Typography } from "antd";
import Bookmark from "./BookMark";
import { MdLock } from "react-icons/md";
// Status mapping with color
const status = [
  {
    status: "ongoing",
    color: '#9557ec',
  },
  {
    status: "completed",
    color: '#ff4d63',
  },
  {
    status: "new",
    color: '#0dd037',
  },
  {
    status: "locked",
    color: '#dfd9d2',
  },
];

export interface CourseCardProps {
  data: {
    status: string;
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
            <Box>
                {
                    data.status=='locked'?
                    <MdLock/>:   <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />
                }
            </Box>
            <Box sx={{ width: '90%', wordBreak: "break-word" }}>
              <h3
                style={{
                  margin: '0 15px',
                  fontSize: "15px",
                  textAlign: "left",
                  whiteSpace: "normal", 
                  fontWeight: 'bold',
                  color:'#c0b8ae'// Allow the text to wrap
                }}
              >
                ENTREPRENEURSHIP I: CUSTOMER DISCOVERY
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
          minWidth: 400,
          width: '500px',
          position: "relative",
          minHeight: 250,
        }}
      >
        <Typography style={{color:'#c0b8ae'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias non cumque omnis, hic ullam earum! Vero reiciendis voluptate excepturi impedit?</Typography>
        <Button style={{ height: '20px', fontSize: '10px', textTransform: 'uppercase',color:'#c0b8ae' }}>Entrepreneurship</Button>
      </Card>

      {/* Status Box */}
      <Box
        sx={{
          background: statusColor, // Apply dynamic background color based on status
          width: '100%',
          height: '60px',
          position: 'absolute',
          bottom: '-10px',
          borderBottomRightRadius: '5px',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 25px', position: 'relative', }}>

          <Box>
            <Typography style={{ fontSize: '12px', color: 'white' }}>Lesson Completed</Typography>
            <Typography style={{ color: 'white',fontSize: data.status=="locked" || data.status=="new"?"30px":"initial" }}>
            {
                data.status=="locked" || data.status=="new"?""
                :<span style={{ fontSize: '30px', color: 'white' }}>2/</span>
            }
              3
            </Typography>
          </Box>
        {
            data.status=="completed"?<Box>
            <Typography style={{ fontSize: '12px', color: 'white', marginBottom: '10px', position: 'absolute', top: '1px', textAlign:'center',    marginLeft: "29px" }}>
               Completed On
            </Typography>
            <Typography style={{ color: 'white', fontSize: '15px' }}>October 22 2024</Typography>
          </Box>:""
        }
          

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '0 40px' }}>
            <Divider type="vertical" style={{ height: '50px', background: 'white' }} />
            <Typography style={{ color: 'white', fontSize: '15px', textAlign: 'center', textTransform: 'uppercase', fontWeight: 'bold' }}>
              Review
            </Typography>
          </Box>
        </Box>
      </Box>
    </Space>
  );
}
