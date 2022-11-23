import React from "react";
import { Typography, Box } from "@mui/material";
import TabsSection from "./TabsSection";

export default function Create() {
  return (
    <Box>
      <Typography
        sx={{ fontSize: "36px", fontWeight: "700", marginTop: "20px" }}
      >
        Setting
      </Typography>
      <Box
        sx={{ width: "100%", backgroundColor: "#D6DAE1", height: "1px" }}
      ></Box>
      <Box sx={{ marginTop: "40px" }}>
        <TabsSection />
      </Box>
    </Box>
  );
}
