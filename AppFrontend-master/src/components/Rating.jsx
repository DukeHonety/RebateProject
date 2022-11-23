import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import StarOffImg from "../assets/images/star_off.png";
import StarOnImg from "../assets/images/star_on.png";
import { useNavigate } from "react-router-dom";
import progress1 from "../assets/images/progress1.png";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  heroImage: {
    backgroundImage: `url(${heroImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
    paddingTop: "45px",
    paddingBottom: "45px",
  },
  heroImageStyle: {
    width: "45%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
  },
  formBackground: {
    backgroundImage: `url(${formBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "210px",
    paddingBottom: "210px",
  },
  formBackgroundStyle: {
    backgroundImage: `url(${lightBg})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    paddingTop: "30px",
    paddingBottom: "30px",
    width: "75%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    borderRadius: "20px",
    margin: "auto",
  },
  formContentDiv: {
    width: "80%", margin: "auto"
  }
}));

export default function RatingSection() {
  const classes = useStyles();
  const [currentLevel, SetLevel] = useState(0);
  const starAry = [0, 1, 2, 3, 4];
  let navigate = useNavigate();
  const onNextButtonClick = () => {
    if (currentLevel === 3 || currentLevel === 2 || currentLevel === 1) {
      let path = `/suggestion`;
      navigate(path);
    } else {
      let path = `/comments`;
      navigate(path);
    }
  };
  return (
    <>
      <Box>
        <Box
          className={classes.heroImage}
        >
          <Box
            className={classes.heroImageStyle}
          >
            <Box
              className={classes.formBackground}
            >
              <Box
                className={classes.formBackgroundStyle}
              >
                <Box className={classes.formContentDiv}>
                  <Box >
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
                      Did you enjoy our product?
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
                    <div style={{ display: "flex" }}>
                      {starAry.map((level) => {
                        return (
                          <div
                            className="cursor-pointer"
                            onClick={() => SetLevel(level + 1)}
                            onMouseEnter={() => SetLevel(level + 1)}
                            onMouseLeave={() => SetLevel("")}
                          >
                            {level < currentLevel && (
                              <img
                                src={StarOnImg}
                                className="h-85 w-85"
                                alt="starOn"
                              />
                            )}
                            {level >= currentLevel && (
                              <img
                                src={StarOffImg}
                                className="h-85 w-85"
                                alt="staroff"
                              />
                            )}
                          </div>
                        );
                      })}
                    </div>

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
                        src={`${progress1}`}
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
