import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import help from "../assets/images/help.png";
import help1 from "../assets/images/help1.svg";
import { useNavigate } from "react-router-dom";
import MaskedInput from "react-text-mask";
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
    paddingTop: "50px",
    paddingBottom: "50px",
  },
  heroImageStyle: {
    width: "49%",
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
    paddingTop: "130px",
    paddingBottom: "130px",
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

export default function HeroSection() {
  const classes = useStyles();
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");

    setMessage(result);
  };
  let navigate = useNavigate();
  const onClaimButtonClick = () => {
    let path = `/rating`;
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
                      }}
                    >
                      Fill Out The Form Below To Redeem Your Reward!
                    </Typography>
                    <Typography
                      sx={{
                        color: "#7335FD",
                        textAlign: "center",
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "14px",
                          lg: "16px",
                          xl: "16px",
                        },
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      No Strings Attached | No Credit Card Required!
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
                    <input
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        width: "99%",
                        margin: "auto",
                        height: "50px",
                        textAlign: "center",
                        border: "1px solid lightgray",
                        marginTop: "20px",
                        borderRadius: "5px",
                      }}
                      placeholder="NAME (USED ON AMAZON)"
                      id="message"
                      name="message"
                      type="text"
                      value={message}
                      onChange={handleChange}
                    />

                    <Box>
                      <MaskedInput
                        style={{
                          color: "grey",
                          fontSize: "16px",
                          width: "99%",
                          margin: "auto",
                          height: "50px",
                          textAlign: "center",
                          border: "1px solid lightgray",
                          marginTop: "20px",
                          borderRadius: "5px",
                        }}
                        placeholder="AMAZON ORDER NUMBER"
                        mask={[
                          /[1-9]/,
                          /\d/,
                          /\d/,

                          "-",
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          "-",
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
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
                      onClick={onClaimButtonClick}
                    >
                      Claim!
                    </Button>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        marginTop: "20px",
                      }}
                    >
                      <img
                        src={`${help1}`}
                        height="20px"
                        alt="logo2"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        sx={{
                          color: "#FF5D29",
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                            xl: "16px",
                          },
                        }}
                      >
                        Invalid Order Number
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                      <img
                        src={`${help}`}
                        height="20px"
                        alt="logo2"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                            xl: "16px",
                          },
                        }}
                      >
                        We don’t share your personal info with anyone. Check out
                        our{" "}
                        <span style={{ color: "#7335FD" }}>Privacy Policy</span>{" "}
                        for more information.
                      </Typography>
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
