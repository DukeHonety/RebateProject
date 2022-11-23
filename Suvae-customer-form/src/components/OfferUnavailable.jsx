import React from "react";
import { Box, Typography } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";

export default function OfferUnavailable() {
  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "45%",
                xl: "45%",
              },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${formBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "290px",
                paddingBottom: "290px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${lightBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  width: {
                    xs: "90%",
                    sm: "90%",
                    md: "90%",
                    lg: "75%",
                    xl: "75%",
                  },
                  borderRadius: "20px",
                  margin: "auto",
                }}
              >
                <Box sx={{ width: "90%", margin: "auto" }}>
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "20px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontWeight: "700",
                        color: "#272B36",
                        fontFamily: "Merriweather",
                      }}
                    >
                      Uh oh!
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "10px" }}>
                    <Typography
                      sx={{
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "22px",
                          lg: "22px",
                          xl: "22px",
                        },
                        textAlign: "center",
                        fontFamily: "Merriweather",
                        color: "rgba(39, 43, 54, 0.6)",
                      }}
                    >
                      This offer is currently not available. Feel free to try
                      again on a later date.
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
