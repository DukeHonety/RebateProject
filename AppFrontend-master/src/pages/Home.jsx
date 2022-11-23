import React from "react";
import Header from "../components/Header";
import { Box } from "@mui/material";
import Asidebar from "../components/Asidebar";
import StepsSection from "../components/Home/StepsSection";
import StatsSection from "../components/Home/StatsSection";
import Analytics from "../components/Home/Analytics";
import SearchSection from "../components/Home/SearchSection";
import ProductsTable from "../components/Home/ProductsTable";

export default function Home() {
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
          <StepsSection />
          <StatsSection />
          <Analytics />
          <SearchSection />
          <ProductsTable />
        </Box>
      </Box>
    </>
  );
}
