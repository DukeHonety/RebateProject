import React, { useState } from "react";
import { Box, Typography, Grid } from "@mui/material";
import ReactFlagsSelect from "react-flags-select";

export default function RegionSelector() {
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
              Region
            </Typography>
          </Grid>
          <Grid xs={12} sm={12} md={9} lg={9} xl={9}>
            <Box>
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={[
                  "fi",
                  "GB",
                  "IE",
                  "IT",
                  "NL",
                  "SE",
                  "FR",
                  "DE",
                  "ES",
                  "TR",
                  "AE",
                  "SA",
                  "IN",
                ]}
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
              Primary Marketplace
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
              <ReactFlagsSelect
                selected={select}
                onSelect={onSelect}
                countries={[
                  "fi",
                  "GB",
                  "IE",
                  "IT",
                  "NL",
                  "SE",
                  "FR",
                  "DE",
                  "ES",
                  "TR",
                  "AE",
                  "SA",
                  "IN",
                ]}
              />
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
