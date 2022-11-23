import React from "react";
import { Typography, Box, Grid, Link } from "@mui/material";
import faq1 from "../assets/images/faq1.png";
import faq2 from "../assets/images/faq2.png";
import faq3 from "../assets/images/faq3.png";
import faq4 from "../assets/images/faq4.png";
import "@fontsource/merriweather";

export default function Faqs() {
  return (
    <>
      <Box
        sx={{
          width: { xs: "90%", sm: "90%", md: "80%", lg: "70%", xl: "70%" },
          margin: "auto",
          paddingTop: "30px",
          paddingBottom: "70px",
        }}
      >
        <Typography
          sx={{
            fontSize: {
              xs: "20px",
              sm: "20px",
              md: "22px",
              lg: "28px",
              xl: "28px",
            },
            textAlign: "center",
            color: "#272B36",
            fontWeight: "700",
            paddingBottom: "80px",
            fontFamily: "Merriweather",
          }}
        >
          Frequently Asked Questions
        </Typography>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box>
              <Link
                href="https://www.awesomescreenshot.com/video/12038278?key=791e3ca26a61df457c428e52bd35efb9"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    boxShadow:
                      "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
                    borderRadius: "12px",
                    paddingBottom: "20px",
                    height: {
                      sx: "190px",
                      sm: "190px",
                      md: "170px",
                      lg: "170px",
                      xl: "170px",
                    },
                  }}
                >
                  <Box
                    sx={{ width: "85%", margin: "auto", paddingTop: "-20px" }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: "23%",
                          sm: "19%",
                          md: "40%",
                          lg: "100%",
                          xl: "100%",
                        },
                        margin: "auto",
                      }}
                    >
                      <img
                        src={`${faq1}`}
                        height="70px"
                        alt="logo2"
                        style={{ position: "relative", top: "-45px" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                          xl: "left",
                        },
                        marginTop: "-40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            sm: "18px",
                            md: "18px",
                            lg: "21px",
                            xl: "21px",
                          },
                          fontWeight: "700",
                          fontFamily: "Merriweather",
                          color: "black",
                        }}
                      >
                        Is it really FREE?
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#565973",
                        paddingTop: "10px",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "center",
                          lg: "left",
                          xl: "left",
                        },
                      }}
                    >
                      Yes it’s totally free and no, you don’t pay anything. All
                      we’ll ask for is your Amazon order number so we can verify
                      you are one of our customers.
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
            <Box>
              <Link
                href="https://www.awesomescreenshot.com/video/12038278?key=791e3ca26a61df457c428e52bd35efb9"
                sx={{ textDecoration: "none" }}
              >
                <Box
                  sx={{
                    boxShadow:
                      "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
                    borderRadius: "12px",
                    paddingBottom: "20px",
                    height: {
                      sx: "190px",
                      sm: "190px",
                      md: "170px",
                      lg: "170px",
                      xl: "170px",
                    },
                  }}
                >
                  <Box
                    sx={{ width: "85%", margin: "auto", paddingTop: "-20px" }}
                  >
                    <Box
                      sx={{
                        width: {
                          xs: "23%",
                          sm: "19%",
                          md: "40%",
                          lg: "100%",
                          xl: "100%",
                        },
                        margin: "auto",
                      }}
                    >
                      <img
                        src={`${faq2}`}
                        height="70px"
                        alt="logo2"
                        style={{ position: "relative", top: "-45px" }}
                      />
                    </Box>
                    <Box
                      sx={{
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "left",
                          lg: "left",
                          xl: "left",
                        },
                        marginTop: "-40px",
                      }}
                    >
                      <Typography
                        sx={{
                          fontSize: {
                            xs: "18px",
                            sm: "18px",
                            md: "18px",
                            lg: "21px",
                            xl: "21px",
                          },
                          fontWeight: "700",
                          fontFamily: "Merriweather",
                          color: "black",
                        }}
                      >
                        What's the catch?
                      </Typography>
                    </Box>
                    <Typography
                      sx={{
                        color: "#565973",
                        paddingTop: "10px",
                        textAlign: {
                          xs: "center",
                          sm: "center",
                          md: "center",
                          lg: "left",
                          xl: "left",
                        },
                      }}
                    >
                      There isn’t one! We only ask that you give us private
                      feedback about the product you purchased (only takes 1
                      minute) so we can continuously improve our products to
                      meet the needs of our customers.
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ marginTop: "60px" }}>
          <Grid container spacing={7}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box>
                <Link
                  href="https://www.awesomescreenshot.com/video/12038278?key=791e3ca26a61df457c428e52bd35efb9"
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
                      borderRadius: "12px",
                      paddingBottom: "20px",
                      height: {
                        sx: "190px",
                        sm: "190px",
                        md: "170px",
                        lg: "170px",
                        xl: "170px",
                      },
                    }}
                  >
                    <Box
                      sx={{ width: "85%", margin: "auto", paddingTop: "-20px" }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: "23%",
                            sm: "19%",
                            md: "40%",
                            lg: "100%",
                            xl: "100%",
                          },
                          margin: "auto",
                        }}
                      >
                        <img
                          src={`${faq3}`}
                          height="70px"
                          alt="logo2"
                          style={{ position: "relative", top: "-45px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: {
                            xs: "center",
                            sm: "center",
                            md: "left",
                            lg: "left",
                            xl: "left",
                          },
                          marginTop: "-40px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "18px",
                              sm: "18px",
                              md: "18px",
                              lg: "21px",
                              xl: "21px",
                            },
                            fontWeight: "700",
                            fontFamily: "Merriweather",
                            color: "black",
                          }}
                        >
                          Do I qualify?
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "#565973",
                          paddingTop: "10px",
                          textAlign: {
                            xs: "center",
                            sm: "center",
                            md: "center",
                            lg: "left",
                            xl: "left",
                          },
                        }}
                      >
                        Offer is valid only for customers that purchased the
                        product at full price on Amazon.com.
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
              <Box>
                <Link
                  href="https://www.awesomescreenshot.com/video/12038278?key=791e3ca26a61df457c428e52bd35efb9"
                  sx={{ textDecoration: "none" }}
                >
                  <Box
                    sx={{
                      boxShadow:
                        "0px 4.4px 12px -1px rgba(19, 16, 34, 0.06), 0px 2px 6.4px -1px rgba(19, 16, 34, 0.03)",
                      borderRadius: "12px",
                      paddingBottom: "20px",
                      height: {
                        sx: "190px",
                        sm: "190px",
                        md: "170px",
                        lg: "170px",
                        xl: "170px",
                      },
                    }}
                  >
                    <Box
                      sx={{ width: "85%", margin: "auto", paddingTop: "-20px" }}
                    >
                      <Box
                        sx={{
                          width: {
                            xs: "23%",
                            sm: "19%",
                            md: "40%",
                            lg: "100%",
                            xl: "100%",
                          },
                          margin: "auto",
                        }}
                      >
                        <img
                          src={`${faq4}`}
                          height="70px"
                          alt="logo2"
                          style={{ position: "relative", top: "-45px" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: {
                            xs: "center",
                            sm: "center",
                            md: "left",
                            lg: "left",
                            xl: "left",
                          },
                          marginTop: "-40px",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: {
                              xs: "18px",
                              sm: "18px",
                              md: "18px",
                              lg: "21px",
                              xl: "21px",
                            },
                            fontWeight: "700",
                            fontFamily: "Merriweather",
                            color: "black",
                          }}
                        >
                          Is it a long process?
                        </Typography>
                      </Box>
                      <Typography
                        sx={{
                          color: "#565973",
                          paddingTop: "10px",
                          textAlign: {
                            xs: "center",
                            sm: "center",
                            md: "center",
                            lg: "left",
                            xl: "left",
                          },
                        }}
                      >
                        No! In fact, our form can be completed within 60
                        seconds!
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
}
