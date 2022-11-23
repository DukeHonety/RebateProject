import React from "react";
import { Typography, Box, Grid } from "@mui/material";
import step1 from "../../assets/images/step1.png";
import step2 from "../../assets/images/step2.png";
import step3 from "../../assets/images/step3.png";
import step4 from "../../assets/images/step4.png";
import completedStep from "../../assets/images/completedStep.png";
import arrow from "../../assets/images/arrow.png";

export default function StepsSection() {
  const [showSteps, SetShowSteps] = React.useState(true);
  const onClickFinishSetup = () => {
    SetShowSteps(false);
  };
  return (
    <>
      <Box sx={{ width: "100%", margin: "auto" }}>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "700", marginTop: "20px" }}
        >
          Dashboard
        </Typography>
        <Box
          sx={{ width: "100%", backgroundColor: "#D6DAE1", height: "1px" }}
        ></Box>
        {showSteps ? (
          <Box
            sx={{
              backgroundColor: "#444444",
              marginTop: "40px",
              paddingBottom: "20px",
            }}
          >
            <Box>
              <Box sx={{ width: "90%", margin: "auto" }}>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Box
                          component="img"
                          alt="Your logo."
                          src={step1}
                        />
                        <Typography
                          sx={{
                            fontSize: "22px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          Confirm Email
                        </Typography>
                        <Box
                          component="img"
                          sx={{
                            marginTop: "5px",
                          }}
                          alt="Your logo."
                          src={completedStep}
                        />
                      </Box>
                      <Box>
                        <Box
                          component="img"
                          sx={{
                            height: "30px",
                            width: "60px",
                            marginLeft: "20px",
                            marginTop: "45px",
                          }}
                          alt="Your logo."
                          src={arrow}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Box
                          component="img"
                          alt="Your logo."
                          src={step2}
                        />
                        <Typography
                          sx={{
                            fontSize: "22px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          Add Marketplace
                        </Typography>
                        <Box
                          component="img"
                          sx={{
                            marginTop: "5px",
                          }}
                          alt="Your logo."
                          src={completedStep}
                        />
                      </Box>
                      <Box>
                        <Box
                          component="img"
                          sx={{
                            height: "30px",
                            width: "60px",
                            marginLeft: "20px",
                            marginTop: "45px",
                          }}
                          alt="Your logo."
                          src={arrow}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <Box sx={{ display: "flex" }}>
                      <Box sx={{ textAlign: "center" }}>
                        <Box
                          component="img"
                          alt="Your logo."
                          src={step3}
                        />
                        <Typography
                          sx={{
                            fontSize: "22px",
                            fontWeight: "500",
                            color: "white",
                          }}
                        >
                          Create Package Insert
                        </Typography>
                        <Typography
                          sx={{
                            fontSize: "18px",
                            fontWeight: "600",
                            color: "#7569C8",
                            marginTop: "5px",
                          }}
                        >
                          Set Up
                        </Typography>
                      </Box>
                      <Box>
                        <Box
                          component="img"
                          sx={{
                            height: "30px",
                            width: "60px",
                            marginLeft: "20px",
                            marginTop: "45px",
                          }}
                          alt="Your logo."
                          src={arrow}
                        />
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={6} md={6} lg={3} xl={3}>
                    <Box sx={{ textAlign: "center" }}>
                      <Box
                        component="img"
                        alt="Your logo."
                        src={step4}
                      />
                      <Typography
                        sx={{
                          fontSize: "22px",
                          fontWeight: "500",
                          color: "white",
                        }}
                      >
                        Upload Promotional Codes
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "18px",
                          fontWeight: "600",
                          color: "#7569C8",
                          marginTop: "5px",
                        }}
                      >
                        <Box
                          onClick={onClickFinishSetup}
                          sx={{ cursor: "pointer" }}
                        >
                          Set Up
                        </Box>
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
