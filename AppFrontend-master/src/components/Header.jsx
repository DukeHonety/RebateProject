import React, { useRef } from "react";
import { Typography, Box, Button } from "@mui/material";
import earningBtn from "../assets/images/earningBtn.png";
import notificationBtn from "../assets/images/notification.png";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import user from "../assets/images/user.png";

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "white" }}>
        <Box
          sx={{
            width: "98%",
            margin: "auto",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          <Box
            sx={{
              width: { xs: "77%", sm: "48%", md: "38%", lg: "32%", xl: "22%" },
              marginLeft: "auto",
            }}
          >
            <Box sx={{ display: "flex" }}>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7335FD",
                  fontSize: "15px",
                  fontWeight: "600",
                  height: "42px",
                }}
              >
                <Box
                  component="img"
                  sx={{
                    height: "20px",
                    width: "25px",
                    marginRight: "10px",
                  }}
                  alt="Your logo."
                  src={earningBtn}
                />
                $0.00
              </Button>
              <Box
                sx={{
                  width: "2px",
                  height: "42px",
                  backgroundColor: "#DBDBDB",
                  marginLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
              ></Box>
              <Box
                component="img"
                sx={{
                  height: "40px",
                  width: "35px",
                  marginLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
                alt="Your logo."
                src={notificationBtn}
              />
              <Box
                sx={{
                  width: "2px",
                  height: "42px",
                  backgroundColor: "#DBDBDB",
                  marginLeft: {
                    xs: "10px",
                    sm: "10px",
                    md: "10px",
                    lg: "20px",
                    xl: "20px",
                  },
                }}
              ></Box>
              <Box sx={{ display: "flex" }}>
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                  alt="Your logo."
                  src={user}
                />
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: "400",
                    marginTop: "12px",
                    marginLeft: "20px",
                  }}
                >
                  Avviso
                </Typography>

                <div>
                  <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                  >
                    <ArrowDropDownIcon />
                  </IconButton>
                  <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                  </Menu>
                </div>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
