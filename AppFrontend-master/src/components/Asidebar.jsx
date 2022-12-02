import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import { Box, Link } from "@mui/material";
import logo from "../assets/images/logo.png";
import home from "../assets/images/home.png";
import products from "../assets/images/products.png";
import dashboard from "../assets/images/dashboard.png";
import setting from "../assets/images/setting.png";
import { useLocation } from "react-router-dom";

export default function Asidebar() {
  let location = useLocation();
  const [showAsidebar1, setShowAsidebar1] = useState(false);
  const [showAsidebar2, setShowAsidebar2] = useState(true);
  const openFirstAsidebar = () => {
    setShowAsidebar1(false);
    setShowAsidebar2(true);
  };
  const openSecondAsidebar = () => {
    setShowAsidebar1(true);
    setShowAsidebar2(false);
  };
  return (
    <>
      {showAsidebar1 ? (
        <Box
          sx={{
            width: "230px",
            backgroundColor: "#444444",
            height: "2000px",
            marginTop: "-68px",
            zIndex: 6,
            position: "absolute",
          }}
          onMouseLeave={openFirstAsidebar}
        >
          <Box
            sx={{
              backgroundColor: "black",
              paddingTop: "5px",
              paddingBottom: "5px",
            }}
          >
            <Typography
              sx={{
                fontSize: "40px",
                fontWeight: "700",
                textAlign: "center",
                color: "white",
              }}
            >
              Suvae
            </Typography>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Link href="/" sx={{ color: "white", textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  paddingBottom: "7px",
                  paddingTop: "4px",
                  width: "90%",
                  margin: "auto",
                  borderRadius: "10px",
                }}
                backgroundColor={location.pathname === "/" ? "#5541D8" : ""}
              >
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                  alt="Your logo."
                  src={home}
                />
                <Typography
                  sx={{
                    color: "white",
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                  color={location.pathname === "/" ? "white" : "#8B8FA3"}
                >
                  Overview
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Link
              href="/products"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  paddingBottom: "7px",
                  paddingTop: "4px",
                  width: "90%",
                  margin: "auto",
                  borderRadius: "10px",
                }}
                backgroundColor={
                  location.pathname === "/products" ? "#5541D8" : ""
                }
              >
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                  alt="Your logo."
                  src={products}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "6px",
                    marginLeft: "20px",
                  }}
                  color={
                    location.pathname === "/products" ? "white" : "#8B8FA3"
                  }
                >
                  Products
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Link
              href="/dashboard"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  paddingBottom: "7px",
                  paddingTop: "4px",
                  width: "90%",
                  margin: "auto",
                  borderRadius: "10px",
                }}
                backgroundColor={
                  location.pathname === "/dashboard" ? "#5541D8" : ""
                }
              >
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                  alt="Your logo."
                  src={dashboard}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "0px",
                    marginLeft: "20px",
                  }}
                  color={
                    location.pathname === "/" ? "white" : "#8B8FA3"
                  }
                >
                  Package Insert Gallery
                </Typography>
              </Box>
            </Link>
          </Box>
          <Box sx={{ marginTop: "10px" }}>
            <Link
              href="/setting"
              sx={{ color: "white", textDecoration: "none" }}
            >
              <Box
                sx={{
                  display: "flex",
                  paddingBottom: "7px",
                  paddingTop: "4px",
                  width: "90%",
                  margin: "auto",
                  borderRadius: "10px",
                }}
                backgroundColor={
                  location.pathname === "/setting" ? "#5541D8" : ""
                }
              >
                <Box
                  component="img"
                  sx={{
                    height: "35px",
                    width: "35px",
                    marginLeft: "20px",
                    marginTop: "5px",
                  }}
                  alt="Your logo."
                  src={setting}
                />
                <Typography
                  sx={{
                    fontSize: "18px",
                    fontWeight: "600",
                    marginTop: "10px",
                    marginLeft: "20px",
                  }}
                  color={location.pathname === "/setting" ? "white" : "#8B8FA3"}
                >
                  Setting
                </Typography>
              </Box>
            </Link>
          </Box>
        </Box>
      ) : null}
      {showAsidebar2 ? (
        <Box
          sx={{
            backgroundColor: "#444444",
            height: "2000px",
            marginTop: "-68px",
          }}
          onMouseEnter={openSecondAsidebar}
        >
          <Box
            sx={{
              backgroundColor: "#7335FD",
              paddingTop: "12px",
              paddingBottom: "12px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "35px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              alt="Your logo."
              src={logo}
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            borderLeft={location.pathname === "/" ? "3px solid #7335FD" : ""}
            backgroundColor={location.pathname === "/" ? "black" : ""}
          >
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "35px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              alt="Your logo."
              src={home}
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            borderLeft={
              location.pathname === "/products" ? "3px solid #7335FD" : ""
            }
            backgroundColor={location.pathname === "/products" ? "black" : ""}
          >
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "35px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              alt="Your logo."
              src={products}
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            borderLeft={
              location.pathname === "/" ? "3px solid #7335FD" : ""
            }
            backgroundColor={location.pathname === "/" ? "black" : ""}
          >
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "35px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              alt="Your logo."
              src={dashboard}
            />
          </Box>
          <Box
            sx={{
              marginTop: "10px",
              paddingTop: "10px",
              paddingBottom: "10px",
            }}
            borderLeft={
              location.pathname === "/setting" ? "3px solid #7335FD" : ""
            }
            backgroundColor={location.pathname === "/setting" ? "black" : ""}
          >
            <Box
              component="img"
              sx={{
                height: "35px",
                width: "35px",
                marginLeft: "20px",
                marginTop: "5px",
              }}
              alt="Your logo."
              src={setting}
            />
          </Box>
        </Box>
      ) : null}
    </>
  );
}
