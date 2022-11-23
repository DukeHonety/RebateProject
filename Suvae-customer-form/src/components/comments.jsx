import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import progress2 from "../assets/images/progress2.png";
import { useNavigate } from "react-router-dom";

export default function CommentsSection() {
  let navigate = useNavigate();
  const onNextButtonClick = () => {
    let path = `/reward`;
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
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "100%", md: "80%", lg: "46%", xl: "46%" },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${formBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "200px",
                paddingBottom: "200px",
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
                        lg: "90%",
                        xl: "90%",
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
                      Anything we can improve?
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
                    <Box sx={{ textAlign: "center" }}>
                    <TextareaAutosize
                        minRows={5}
                        placeholder="OPTIONAL"
                        style={{
                          width: "99%",
                          textAlign: "center",
                          borderRadius: "4px",
                          paddingTop: "50px",
                          border: "1px solid lightgray",
                          height:"60px",
                        }}
                      />
                    </Box>

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
                      onClick={onNextButtonClick}
                    >
                      Next
                    </Button>
                    <Box
                      sx={{ paddingTop: "20px", width: "80%", margin: "auto" }}
                    >
                      <img
                        src={`${progress2}`}
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
