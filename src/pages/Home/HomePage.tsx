import { Box } from "@mui/material";
import TextCard from "../../reusable/TextCard";
import HomePageTasks from "./HomePageTasks";
import { stylesHomePage } from "../../styles/PageStyles/homePageStyles";
import TaskStatus from "../../reusable/TaskStatus";

export default function HomePage() {
  // const theme = useTheme();
  return (
    <Box sx={{...stylesHomePage.textCard}} >
      <Box>
        <HomePageTasks/>
        <Box sx={{marginTop:'15px'}}></Box>
        <TaskStatus/>
        <TaskStatus/>
        <TaskStatus/>
      </Box>
     
      <Box sx={{...stylesHomePage.secondBox}}
      >
        <TextCard
          data={{
            title: "Admission Question",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, consequatur!",
            btn: true,
          }}
        />
      </Box>
    </Box>
  );
}
