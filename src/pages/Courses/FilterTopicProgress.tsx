import { Box } from "@mui/material";
import { Typography } from "antd";
import ButtonFilter from "../../reusable/ButtonFilter";
import DividerComp from "../../reusable/DividerComp";

export default function FilterTopicProgress() {
  return (
    <Box
    //   sx={{
    //     padding: 2,
    //     border: "1px solid #d4d4d4",
    //     borderRadius: "8px",
    //     boxShadow: "0px 1px 5px rgba(0, 0, 0, 0.1)",
    //     backgroundColor: "#fff",
    //   }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Filter By Topic Section */}
        <Box>
          <Typography style={{ marginBottom: "10px", fontWeight: "bold" }}>
            Filter By Topic
          </Typography>
          {["All", "Math", "Science", "History", "English"].map((topic) => (
            <ButtonFilter
              key={topic}
              data={{
                name: topic,
                label: topic,
                key: topic.toLowerCase(),
                onChange: (e: { name: string; key: string }) => {
                  console.log(e);
                },
              }}
            />
          ))}
        </Box>

        {/* Filter By Progress Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Filter By Progress
            </Typography>
            {["All", "Started", "In Progress", "Completed"].map((progress) => (
              <ButtonFilter
                key={progress}
                data={{
                  name: progress,
                  label: progress,
                  key: progress.toLowerCase(),
                  onChange: (e: { name: string; key: string }) => {
                    console.log(e);
                  },
                }}
              />
            ))}
          </Box>

          {/* Filter By Status Section */}
          <Box>
            <Typography style={{ marginBottom: "10px", fontWeight: "bold" }}>
              Filter By Status
            </Typography>
            {["All", "Active", "Inactive"].map((status) => (
              <ButtonFilter
                key={status}
                data={{
                  name: status,
                  label: status,
                  key: status.toLowerCase(),
                  onChange: (e: { name: string; key: string }) => {
                    console.log(e);
                  },
                }}
              />
            ))}
          </Box>
        </Box>
       
      </Box>
      <DividerComp/>
    </Box>
  );
}
