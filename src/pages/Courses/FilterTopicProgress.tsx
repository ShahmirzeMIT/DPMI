import { Box } from "@mui/material";
import { Typography } from "antd";
import ButtonFilter from "../../reusable/ButtonFilter";
import DividerComp from "../../reusable/DividerComp";
import { useState } from "react";
import CourseCard from "../../reusable/CourseCard";

export default function FilterTopicProgress() {
  const [activeTopics, setActiveTopics] = useState<string[]>([]);
  const [activeProgresses, setActiveProgresses] = useState<string[]>([]);
  const [activeStatuses, setActiveStatuses] = useState<string[]>([]);

  const handleFilterChange = (group: string[], setGroup: React.Dispatch<React.SetStateAction<string[]>>, selected: string) => {
    if (selected.startsWith("Any")) {
      // Reset the group to only include "Any"
      setGroup([selected]);
    } else {
      // Remove "Any" and toggle the selection of the clicked button
      const newGroup = group.includes(selected)
        ? group.filter((item) => item !== selected) // Deselect
        : [...group.filter((item) => !item.startsWith("Any")), selected]; // Add selected
      setGroup(newGroup);
    }
  };

  return (
    <Box>
      <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
        {/* Filter By Topic Section */}
        <Box>
          <Typography style={{ marginBottom: "10px", fontWeight: "bold", color: "#c0b8ae" }}>
            Filter By Topic
          </Typography>
          {["Any Topic", "Math", "Science", "History", "English"].map((topic) => (
            <ButtonFilter
              key={topic}
              isActive={activeTopics.includes(topic)}
              data={{
                name: topic,
                label: topic,
                key: topic.toLowerCase(),
                onChange: () => handleFilterChange(activeTopics, setActiveTopics, topic),
              }}
            />
          ))}
        </Box>

        {/* Filter By Progress Section */}
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box>
            <Typography style={{ marginBottom: "10px", fontWeight: "bold", color: "#c0b8ae" }}>
              Filter By Progress
            </Typography>
            {["Any Progress", "Started", "In Progress", "Completed"].map((progress) => (
              <ButtonFilter
                key={progress}
                isActive={activeProgresses.includes(progress)}
                data={{
                  name: progress,
                  label: progress,
                  key: progress.toLowerCase(),
                  onChange: () => handleFilterChange(activeProgresses, setActiveProgresses, progress),
                }}
              />
            ))}
          </Box>

          {/* Filter By Status Section */}
          <Box>
            <Typography style={{ marginBottom: "10px", fontWeight: "bold", color: "#c0b8ae" }}>
              Filter By Status
            </Typography>
            {["Any Status", "Active", "Inactive"].map((status) => (
              <ButtonFilter
                key={status}
                isActive={activeStatuses.includes(status)}
                data={{
                  name: status,
                  label: status,
                  key: status.toLowerCase(),
                  onChange: () => handleFilterChange(activeStatuses, setActiveStatuses, status),
                }}
              />
            ))}
          </Box>
        </Box>
      </Box>
      <DividerComp />
      <Box sx={{display:'flex',gap:'20px',flexWrap:'wrap',justifyContent:'space-around'}}>
         <CourseCard data={{status:"ongoing"}}/>
        <CourseCard data={{status:"completed"}}/>
        <CourseCard data={{status:"locked"}}/>
        <CourseCard data={{status:"new"}}/>
      </Box>
     
    </Box>
  );
}
