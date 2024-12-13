import { Box } from "@mui/material";
import { Tooltip } from "antd";
import { useState } from "react";

export default function Bookmark() {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };

  return (
    <>
      <Tooltip title="Add to MyCourse">
        <Box
          onClick={onClick}
          sx={{
            position: "relative",
            width: "30px", // Width of the bookmark
            height: "60px", // Height of the main rectangle
            backgroundColor: active ? "#4a90e2" : "#dfd9d2", // Blue when active, neutral when inactive
            display: "flex",
            cursor: "pointer",
            justifyContent: "center",
            alignItems: "center",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)", // Subtle shadow for depth
            transition: "background-color 0.3s ease", // Smooth transition
            "&::after": {
              content: '""',
              position: "absolute",
              bottom: "-15px", // Position the triangle
              left: "50%",
              transform: "translateX(-50%)",
              width: 0,
              height: 0,
              borderStyle: "solid",
              cursor: "pointer",
              borderWidth: "15px 15px 0 15px", // Triangle pointing downward
              borderColor: active
                ? "#4a90e2 transparent transparent transparent" // Triangle matches blue when active
                : "#dfd9d2 transparent transparent transparent", // Neutral when inactive
              transition: "border-color 0.3s ease", // Smooth transition for triangle
            },
          }}
        >
          <Box
            sx={{
              width: "18px",
              height: "18px",
              cursor: "pointer",
              backgroundColor: "white", // White star for a refined touch
              clipPath: "polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)", // Star shape
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)", // Subtle shadow for the star
            }}
          ></Box>
        </Box>
      </Tooltip>
    </>
  );
}
