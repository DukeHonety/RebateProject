import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Asidebar from "../components/Asidebar";
import SettingMain from "../components/Setting/SettingMain";

export default function Setting() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box
          sx={{ width: { xs: "16%", sm: "10%", md: "8%", lg: "7%", xl: "5%" } }}
        >
          <Asidebar />
        </Box>
        <Box
          sx={{
            width: { xs: "79%", sm: "85%", md: "87%", lg: "88%", xl: "90%" },
            margin: "auto",
            marginTop: "-10px",
          }}
        >
          <SettingMain />
        </Box>
      </Box>
    </>
  );
}
