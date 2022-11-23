import React from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import progress3 from "../assets/images/progress3.png";
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
    paddingTop: "25px",
    paddingBottom: "25px",
  },
  heroImageStyle: {
    width: "47%",
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
    width: "80%", margin: "auto"
  }
}));


export default function RewardSection() {
  const classes = useStyles();
  let navigate = useNavigate();
  const onTextButtonClick = () => {
    let path = `/number`;
    navigate(path);
  };
  const onEmailButtonClick = () => {
    let path = `/email`;
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
                      TEXT
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
                      EMAIL
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
