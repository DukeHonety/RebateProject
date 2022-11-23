import React from "react";
import { Box } from "@mui/material";
import logo from "../assets/images/logo.png";
import CommentsSection from "../components/comments";
import Faqs from "../components/Faqs";
import QuestionComp from "../components/QuestionComp";
import Footer from "../components/Footer";

export default function Comments() {
  return (
    <>
      <Box>
        <Box
          sx={{
            textAlign: "center",
            paddingTop: "13px",
            paddingBottom: "13px",
            boxShadow:
              "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
          }}
        >
          <img src={`${logo}`} height="30px" alt="logo" />
        </Box>
      </Box>
      <CommentsSection />
      <Faqs />
      <QuestionComp />
      <Footer />
    </>
  );
}
