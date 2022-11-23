import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import logo from "../assets/images/logo1.png";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
const useStyle = makeStyles({
  signInBtn: { marginRight: "20px", fontWeight: "600" },
  getStartedBtn: { fontWeight: "600" },
});

const ResponsiveAppBar = () => {
  const classes = useStyle();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "transparent",
        boxShadow: "none",
        position: "relative",
        top: "30px",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", sm: "100%", md: "80%", lg: "80%" },
          margin: "auto",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 39,
                  width: 92,
                  marginRight: "10px",
                }}
                alt="Your logo."
                src={logo}
              />
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon sx={{ color: "black" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    How It Works
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    FAQ's
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    About
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Contact
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <Box
                component="img"
                sx={{
                  height: 40,
                  width: 80,
                  marginRight: "10px",
                }}
                alt="Your logo."
                src={logo}
              />
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              <MenuItem>
                <Typography textAlign="center" style={{ color: "black" }}>
                  How It Works
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" style={{ color: "black" }}>
                  FAQ's
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" style={{ color: "black" }}>
                  About
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center" style={{ color: "black" }}>
                  Contact
                </Typography>
              </MenuItem>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box
                sx={{
                  display: { xs: "flex", sm: "flex", md: "flex", lg: "flex" },
                }}
              >
                <Button
                  variant="outlined"
                  className={classes.signInBtn}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                    },
                    marginRight: "20px",
                    textTransform: "capitalize",
                  }}
                  startIcon={<ExitToAppIcon />}
                >
                  Sign In
                </Button>
                <Button
                  variant="contained"
                  className={classes.getStartedBtn}
                  sx={{
                    fontSize: {
                      xs: "10px",
                      sm: "10px",
                      md: "16px",
                      lg: "16px",
                    },
                    backgroundColor: "#6366F1",
                    textTransform: "capitalize",
                  }}
                >
                  Get Started
                </Button>
              </Box>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    How It Works
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    FAQ's
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    About
                  </Typography>
                </MenuItem>
                <MenuItem>
                  <Typography textAlign="center" style={{ color: "black" }}>
                    Contact
                  </Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
};
export default ResponsiveAppBar;
