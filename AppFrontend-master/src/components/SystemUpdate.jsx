import React from "react";
import { Box, Typography } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
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
    paddingTop: "30px",
    paddingBottom: "30px",
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
    paddingTop: "290px",
    paddingBottom: "290px",
  },
  formBackgroundStyle:{
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
  formContentDiv:{
    width: "90%", margin: "auto"
  }
}));

export default function SystemUpdate() {
  const classes = useStyles();
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
                      }}
                    >
                      System Update
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
                      Our site is currently undergoing maintinence. Please try
                      again later.
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
