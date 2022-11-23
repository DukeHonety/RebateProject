import React from "react";
import { Typography, Box } from "@mui/material";

export default function QuestionComp() {
  return (
    <>
      <Box sx={{ marginBottom: "60px" }}>
        <Typography
          sx={{ fontSize: "26px", fontWeight: "700", textAlign: "center", fontFamily:"Merriweather", }}
        >
          Have a Question?
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "400", textAlign: "center", fontFamily:"italic" }}
        >
          support@easyrebate.co
        </Typography>
      </Box>
    </>
  );
}
