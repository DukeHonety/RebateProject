import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import progress3 from "../assets/images/progress3.png";
import { useNavigate } from "react-router-dom";

export default function SuggestionLocation() {
    let navigate = useNavigate();
    const onTextButtonClick = () => {
      let path = `/`;
      navigate(path);
    };
    const onEmailButtonClick = () => {
        let path = `/`;
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
            paddingTop: "25px",
            paddingBottom: "25px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%", lg: "47%", xl: "47%" },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${formBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "210px",
                paddingBottom: "210px",
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
                        lg: "80%",
                        xl: "80%",
                      },
                      margin: "auto",
                    }}
                  >
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: {xs:"16px", sm:"16px", md:"20px", lg:"24px", xl:"24px"},
                        fontWeight: "700",
                        color: "#272B36",
                        fontFamily:"Merriweather",
                      }}
                    >
                      Where should we send the reward?
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
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
                      onClick={onTextButtonClick}
                    >
                      TEXT (UNAVAILABLE)
                    </Button>

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
                      onClick={onEmailButtonClick}
                    >
                      EMAIL (UNAVAILABLE)
                    </Button>
                    <Box
                      sx={{ paddingTop: "20px", width: "80%", margin: "auto" }}
                    >
                      <img
                        src={`${progress3}`}
                        height="10px"
                        alt="logo2"
                        style={{
                          marginRight: "10px",
                          marginTop: "2px",
                          width: "100%",
                        }}
                      />
                    </Box>
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
