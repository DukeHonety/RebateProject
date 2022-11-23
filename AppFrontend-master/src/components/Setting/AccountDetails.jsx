import React, { useState } from "react";
import { Box, Typography, Grid, TextField } from "@mui/material";

export default function AccountDetials() {
  const [select, setSelect] = useState("SE");
  const onSelect = (code) => setSelect(code);
  console.log("SELECT", select);
  return (
    <Box sx={{ boxShadow: 1, marginTop: "30px", padding: "15px" }}>
      <Box sx={{ paddingTop: "20px", paddingLeft: "20px" }}>
        <Grid container spacing={2}>
          <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#1E090E",
                fontWeight: "600",
                marginTop: "10px",
                marginBottom: {
                  sm: "5px",
                  xs: "5px",
                  md: "5px",
                  lg: "0px",
                  xl: "0px",
                },
              }}
            >
              Account Nickname
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <Box>
              <TextField
                id="outlined-basic"
                placeholder="example: Awesome Co."
                variant="outlined"
                sx={{ width: "100%", backgroundColor: "#F6F6F6" }}
              />
            </Box>
          </Grid>
          <Grid xs={12} sm={12} md={3} lg={3} xl={3}>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#1E090E",
                fontWeight: "600",
                marginTop: "10px",
              }}
            >
              Seller Central Email
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <Box
              sx={{
                marginTop: {
                  sm: "5px",
                  xs: "5px",
                  md: "5px",
                  lg: "10px",
                  xl: "10px",
                },
              }}
            >
              <TextField
                id="outlined-basic"
                placeholder="Email"
                variant="outlined"
                sx={{ width: "100%", backgroundColor: "#F6F6F6" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
