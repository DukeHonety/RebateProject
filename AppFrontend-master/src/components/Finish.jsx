import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import { useNavigate } from "react-router-dom";
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
    paddingTop: "20px",
    paddingBottom: "20px",
  },
  heroImageStyle: {
    width: "52%",
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
    paddingTop: "250px",
    paddingBottom: "250px",
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

export default function FinishSection() {
  const classes = useStyles();
  let navigate = useNavigate();
  const onLinkButtonClick = () => {
    let path = `/reward`;
    navigate(path);
  };
  const onFinishButtonClick = () => {
    let path = `/stand_by`;
    navigate(path);
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
                        paddingTop: "30px",
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
                        paddingTop: "10px",
                      }}
                    >
                      We would really appreciate if you would leave us a review
                      on Amazon!
                    </Typography>
                    <Box
                      sx={{
                        width: {
                          xs: "90%",
                          sm: "90%",
                          md: "70%",
                          lg: "50%",
                          xl: "50%",
                        },
                        margin: "auto",
                      }}
                    >
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
                  <Box sx={{ marginTop: "30px", paddingBottom: "40px" }}>
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
