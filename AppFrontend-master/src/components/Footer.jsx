import React from "react";
import { Typography, Box } from "@mui/material";
import footerBg from "../assets/images/footerBg.png";

export default function Footer() {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${footerBg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100%",
          width: "100%",
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Box sx={{ width: "80%", margin: "auto" }}>
          <Typography sx={{ textAlign: "center" }}>
            <span
              style={{
                fontWeight: "600",
                fontSize: {
                  xs: "16px",
                  sm: "16px",
                  md: "16px",
                  lg: "18px",
                  xl: "18px",
                },
                color: "black",
              }}
            >
              * *Conditions Apply:
            </span>{" "}
            Limited to one submission per Amazon account and household. Offer
            valid only for customers that purchased the product at full price
            from the official seller account on{" "}
            <span
              style={{ fontWeight: "600", fontSize: "18px", color: "#7335FD" }}
            >
              Amazon.com
            </span>
            . To qualify, applicants need to complete our feedback survey on the
            product they have been using for the previous 7 days or more.
          </Typography>
          <Typography
            sx={{
              fontWeight: "600",
              textAlign: "center",
              fontSize: {
                xs: "16px",
                sm: "16px",
                md: "16px",
                lg: "20px",
                xl: "20px",
              },
              marginTop: "20px",
            }}
          >
            This offer is not dependent on leaving a review on any place nor the
            quality or manner of feedback that you provide.
          </Typography>
        </Box>
      </Box>

      <Box sx={{ backgroundColor: "#3C3943" }}>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            paddingTop: "17px",
            paddingBottom: "17px",
            fontSize: {
              xs: "14px",
              sm: "14px",
              md: "16px",
              lg: "16px",
              xl: "16px",
            },
          }}
        >
          © 2022 EasyRebate. All rights reserved.
        </Typography>
      </Box>
    </>
  );
}
