import React from "react";
import { Typography, Box, Divider, Button } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  accountSectionMain: {
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    margin: "auto",
    backgroundColor: "white",
    paddingTop: "30px",
    paddingBottom: "30px",
    borderRadius: "20px",
  }
}));

export default function AccouontSection() {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
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
    <Box sx={{ marginTop: "50px" }}>
      <Box
        className={classes.accountSectionMain}
      >
        <Typography
          sx={{
            fontSize: "22px",
            fontWeight: "600",
            textAlign: "center",
            paddingBottom: "30px",
          }}
        >
          Edit your account settings
        </Typography>
        <Divider />
        <Box sx={{ width: "90%", margin: "auto" }}>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "600",
              textAlign: "left",
              paddingBottom: "10px",
              paddingTop: "30px",
            }}
          >
            Your Email
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#F8F7FD" }}
            variant="outlined"
          >
            <OutlinedInput
              type="email"
              id="outlined-adornment-weight"
              value={values.weight}
              onChange={handleChange("weight")}
              endAdornment={
                <InputAdornment position="end">
                  <Button
                    variant="contained"
                    sx={{
                      textTransform: "capitalize",
                      fontSize: "12px",
                      fontWeight: "600",
                      backgroundColor: "#FDA700",
                      color: "white",
                      padding: "3px 0px",
                    }}
                  >
                    Verify
                  </Button>
                </InputAdornment>
              }
              aria-describedby="outlined-weight-helper-text"
              placeholder="alfredstone@yourmail.com"
              inputProps={{
                "aria-label": "weight",
              }}
            />
          </FormControl>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "600",
              textAlign: "left",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            Current Password
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#F8F7FD", border: "none" }}
            variant="contained"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Enter current password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "600",
              textAlign: "left",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            New Password
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#F8F7FD", border: "none" }}
            variant="contained"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Enter new password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Typography
            sx={{
              fontSize: "17px",
              fontWeight: "600",
              textAlign: "left",
              paddingBottom: "10px",
              paddingTop: "20px",
            }}
          >
            Confirm Password
          </Typography>
          <FormControl
            sx={{ width: "100%", backgroundColor: "#F8F7FD", border: "none" }}
            variant="contained"
          >
            <OutlinedInput
              id="outlined-adornment-password"
              type={values.showPassword ? "text" : "password"}
              value={values.password}
              onChange={handleChange("password")}
              placeholder="Re-type new password"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {values.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
          <Button
            variant="contained"
            sx={{
              width: "100%",
              backgroundColor: "#5541D8",
              marginTop: "30px",
              paddingTop: "15px",
              paddingBottom: "15px",
              fontWeight: "600",
              textTransform: "capitalize",
            }}
          >
            Change Password
          </Button>
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          sx={{
            paddingLeft: "30px",
            paddingRight: "30px",
            backgroundColor: "#D40000",
            marginTop: "30px",
            paddingTop: "10px",
            paddingBottom: "10px",
            fontWeight: "600",
            textTransform: "capitalize",
          }}
        >
          Delete Account
        </Button>
      </Box>
    </Box>
  );
}
