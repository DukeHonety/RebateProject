import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useSelector } from "react-redux";
import axios from "axios";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import { useNavigate } from "react-router-dom";
import { baseServerUrl } from "../core/constant/base";

export default function FinishSection() {
  let navigate = useNavigate();
  const userInput = useSelector(state => state.app);
  const onLinkButtonClick = () => {
    let path = `/reward`;
    navigate(path);
  };
  const onFinishButtonClick = async () => {
    let response;
    try {
      response = await axios.post(`${baseServerUrl}/storeform`, {
        input: userInput
      });
      console.log(response);
    } catch (error) {
      console.log("[ERROR][GROUPS][CREATE]: ", error.message);
      return;
    }
    let path = `/stand_by`;
    navigate(path);
  };
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
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%", lg: "52%", xl: "52%" },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${formBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "250px",
                paddingBottom: "250px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${lightBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  paddingTop: "10px",
                  paddingBottom: "10px",
                  width: {
                    xs: "90%",
                    sm: "90%",
                    md: "90%",
                    lg: "75%",
                    xl: "75%",
                  },
                  borderRadius:"20px",
                  margin: "auto",
                }}
              >
                <Box sx={{ width: "80%", margin: "auto" }}>
                  <Box
                    sx={{
                      width: {
                        xs: "90%",
                        sm: "90%",
                        md: "80%",
                        lg: "100%",
                        xl: "100%",
                      },
                      margin: "auto",
                    }}
                  >
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
                        paddingTop:"30px",
                      }}
                    >
                     You’re Finished
                    </Typography>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "14px",
                          lg: "22px",
                          xl: "22px",
                        },
                        fontWeight: "700",
                        fontFamily: "Merriweather",
                        color: "rgba(39, 43, 54, 0.6)",
                        paddingTop:"10px",
                      }}
                    >
                     We would really appreciate if you would leave us a review on Amazon!
                    </Typography>
                    <Box sx={{ width: {xs:"90%", sm:"90%", md:"70%", lg:"50%", xl:"50%"}, margin: "auto" }}>
                      <Button
                        variant="contained"
                        sx={{
                          backgroundColor: "#7335FD",
                          width: "100%",
                          marginTop: "20px",
                          color: "white",
                          fontWeight: "600",
                        }}
                        onClick={onLinkButtonClick}
                      >
                        Link to Product
                      </Button>
                    </Box>
                  </Box>
                  <Box sx={{ marginTop: "30px", paddingBottom:"40px" }}>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(90deg, #FB8F66 0%, #7033FF 100%)",
                        width: "100%",
                        marginTop: "20px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        color: "white",
                        fontWeight: "600",
                      }}
                      onClick={onFinishButtonClick}
                    >
                     Submit
                    </Button>
                    
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
