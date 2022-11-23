import React from "react";
import {
  Box,
  Grid,
  Typography,
  Button,
  TextField,
  Link,
  Divider,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "../assets/images/bg.png";
import Checkbox from "@mui/material/Checkbox";
import google from "../assets/images/google.png";
import facebook from "../assets/images/facebook.png";
import Navbar from "../components/Navbar";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  rightSectionBg: {
    backgroundImage: `url(${Image})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "100%",
    width: "100%",
  },
  leftSectionContent: {
    width: "55%",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    margin: "auto",
    paddingTop: "104px",
  },
  googleBtn: {
    display: "flex",
    width: "40%",
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  facebookBtn: {
    display: "flex",
    width: "40%",
    margin: "auto",
    paddingTop: "10px",
    paddingBottom: "10px",
  },
  facebookBtnBox: {
    width: "100%",
    backgroundColor: "lightgray",
    textAlign: "center",
    borderRadius: "5px",
  },
  googleBtnBox: {
    width: "100%",
    backgroundColor: "lightgray",
    textAlign: "center",
    borderRadius: "5px",
  },

}));

export default function RegistrationComponent() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <Navbar />
      <Box sx={{ marginTop: "-80px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box
              className={classes.leftSectionContent}
            >
              <Typography sx={{ fontWeight: "800", fontSize: "40px" }}>
                Create Account
              </Typography>
              <Typography
                sx={{ fontWeight: "400", fontSize: "16px", marginTop: "10px" }}
              >
                Already have an account?{" "}
                <Link
                  href="/"
                  sx={{
                    fontSize: "16px",
                    fontWeight: "400",
                    color: "#6366F1",
                  }}
                >
                  Sign in here.
                </Link>
              </Typography>
              <Box>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        marginTop: "20px",
                      }}
                    >
                      Full name
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "100%" }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Typography
                      sx={{
                        fontWeight: "600",
                        fontSize: "16px",
                        marginTop: "20px",
                      }}
                    >
                      Email
                    </Typography>
                    <TextField
                      id="outlined-basic"
                      variant="outlined"
                      sx={{ width: "100%" }}
                      type="email"
                    />
                  </Grid>
                </Grid>

                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    marginTop: "20px",
                  }}
                >
                  Password
                </Typography>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "" : "password"}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                              <Visibility />
                            )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Typography
                  sx={{
                    fontWeight: "600",
                    fontSize: "16px",
                    marginTop: "20px",
                  }}
                >
                  Confirm Password
                </Typography>
                <FormControl sx={{ width: "100%" }} variant="outlined">
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={values.showPassword ? "" : "password"}
                    onChange={handleChange("password")}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {values.showPassword ? (
                            <VisibilityOff />
                          ) : (
                              <Visibility />
                            )}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                </FormControl>
                <Box sx={{ display: "flex", marginTop: "20px" }}>
                  <Checkbox />
                  <Box sx={{ marginLeft: "3px", marginTop: "10px" }}>
                    <Typography sx={{ fontSize: "16px" }}>
                      I agree to{" "}
                      <span>
                        {" "}
                        <Link
                          href="#"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#6366F1",
                            marginRight: "5px",
                          }}
                        >
                          terms
                        </Link>
                      </span>
                      <span>&</span>
                      <span>
                        {" "}
                        <Link
                          href="#"
                          sx={{
                            fontSize: "16px",
                            fontWeight: "400",
                            color: "#6366F1",
                          }}
                        >
                          conditions.
                        </Link>
                      </span>
                    </Typography>
                  </Box>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                    },
                    backgroundColor: "#6366F1",
                    textTransform: "capitalize",
                    width: "100%",
                    marginTop: "20px",
                    paddingTop: "10px",
                    paddingBottom: "10px",
                    boxShadow: "0px 8px 18px -8px rgba(99, 102, 241, 0.9)",
                  }}
                >
                  Sign up
                </Button>
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Divider sx={{ marginTop: "20px" }} />
                <Typography
                  sx={{
                    fontWeight: "800",
                    fontSize: "16px",
                    marginTop: "20px",
                  }}
                >
                  Or sign in with your social network
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Box
                      className={classes.facebookBtnBox}
                    >
                      <Box
                        className={classes.googleBtn}
                      >
                        <img src={`${google}`} height="20px" />
                        <Typography
                          sx={{ marginLeft: "10px", color: "#3E4265" }}
                        >
                          Google
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                    <Box
                      className={classes.facebookBtnBox}
                    >
                      <Box
                        className={classes.facebookBtn}
                      >
                        <img src={`${facebook}`} height="20px" />
                        <Typography
                          sx={{ marginLeft: "10px", color: "#3E4265" }}
                        >
                          Facebook
                        </Typography>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
              <Box sx={{ paddingBottom: "20px" }}>
                <Box sx={{ textAlign: "center", marginTop: "68px" }}>
                  <Link
                    href="#"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textDecoration: "none",
                      color: "#33354D",
                      marginRight: "10px",
                    }}
                  >
                    Terms & Conditions
                  </Link>

                  <Link
                    href="#"
                    sx={{
                      fontSize: "16px",
                      fontWeight: "400",
                      textDecoration: "none",
                      color: "#33354D",
                    }}
                  >
                    Privacy Policy
                  </Link>
                </Box>
                <Typography
                  sx={{
                    textAlign: "center",
                    fontSize: "12px",
                    fontWeight: "400",
                    color: "#9397AD",
                    marginTop: "8px",
                  }}
                >
                  Copyright 2022. All Rights Reserved
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box
              className={classes.rightSectionBg}
            ></Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
