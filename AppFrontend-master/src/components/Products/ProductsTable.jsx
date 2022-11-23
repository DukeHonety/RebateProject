import React from "react";
import InfoIcon from "@mui/icons-material/Info";
import Tooltip from "@mui/material/Tooltip";
import productImage from "../../assets/images/productImage.png";
import TablePagination from "@mui/material/TablePagination";
import SearchSection from "../Home/SearchSection";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Typography,
  TableHead,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import { makeStyles } from "@material-ui/core";


const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color:
        theme.palette.mode === "light"
          ? theme.palette.grey[100]
          : theme.palette.grey[600],
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#39393D",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

//styling
const useStyles = makeStyles((theme) => ({
  divider: {
    width: "100%", backgroundColor: "#D6DAE1", height: "1px"
  },
  tableInnerContent: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    marginTop: "40px",
  },
  tableheadingRow: {
    backgroundColor: "#F6F7F8",
  },
  tableCellheading: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
    color: "#8B8FA3",
  },
  tableCellContent: {
    fontWeight: "400",
    fontSize: "16px",
    textAlign: "center",
  },
  productContent: {
    display: "flex", width: "60%", margin: "auto"
  }
}));

export default function ProductsTable() {
  const classes = useStyles();
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const [value, setValue] = React.useState(2);
  return (
    <>
      <Box>
        <Typography
          sx={{ fontSize: "36px", fontWeight: "700", marginTop: "20px" }}
        >
          Products
        </Typography>
        <Box
          className={classes.divider}
        ></Box>
        <Typography
          sx={{
            color: "#716E6F",
            fontSize: "14px",
            fontWeight: "300",
            marginTop: "40px",
          }}
        >
          Enbale/Disable products eligible for form submissions.
        </Typography>
        <SearchSection />
      </Box>

      <Box>
        <TableContainer
          component={Paper}
          sx={{
            width: "95%",
            borderRadius: "20px",
            margin: "auto",
          }}
          className={classes.tableInnerContent}
        >
          <Table aria-label="simple table" sx={{ overflowX: "hidden" }}>
            <TableHead className={classes.tableheadingRow}>
              <TableRow>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Product
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "50%",
                      margin: "auto",
                    }}
                  >
                    <Typography
                      className={classes.tableCellheading}
                    >
                      Form Submissions
                    </Typography>
                    <Box>
                      <Tooltip
                        title="Enable or Disable submissions for specific products"
                        placement="top-start"
                      >
                        <InfoIcon
                          sx={{
                            color: "#7335FD",
                            marginLeft: "10px",
                            marginTop: "0px",
                          }}
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Box
                    sx={{
                      display: "flex",
                      width: "50%",
                      margin: "auto",
                    }}
                  >
                    <Typography
                      className={classes.tableCellheading}
                    >
                      Form Incentive
                    </Typography>
                    <Box>
                      <Tooltip
                        title="Incentives are sent to your customer after completion of our form."
                        placement="top-start"
                      >
                        <InfoIcon
                          sx={{
                            color: "#7335FD",
                            marginLeft: "10px",
                            marginTop: "0px",
                          }}
                        />
                      </Tooltip>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Reviews Collected
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <Box className={classes.productContent}>
                    <Box
                      component="img"
                      sx={{
                        height: "50px",
                        width: "50px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={productImage}
                    />
                    <Box>
                      <Typography>Moon Lamp RGB</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  {" "}
                  <Box sx={{ textAlign: "center" }}>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      variant="contained"
                      sx={{
                        color: "white",
                        backgroundColor: "#7335FD",
                        borderRadius: "2px",
                        marginTop: "10px",
                        textTransform: "capitalize",
                        paddingLeft: "35px",
                        paddingRight: "35px",
                      }}
                    >
                      View
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography>0</Typography>
                  </Box>
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell>
                  {" "}
                  <Box className={classes.productContent}>
                    <Box
                      component="img"
                      sx={{
                        height: "50px",
                        width: "50px",
                        marginRight: "10px",
                      }}
                      alt="Your logo."
                      src={productImage}
                    />
                    <Box>
                      <Typography>Moon Lamp RGB</Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  {" "}
                  <Box sx={{ textAlign: "center" }}>
                    <FormControlLabel
                      control={<IOSSwitch sx={{ m: 1 }} />}
                    />
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Button
                      variant="outlined"
                      sx={{
                        color: "#8B8FA3",
                        border: "1px solid #8B8FA3",

                        borderRadius: "2px",
                        marginTop: "10px",
                        textTransform: "capitalize",
                        paddingLeft: "35px",
                        paddingRight: "35px",
                      }}
                    >
                      Setup
                    </Button>
                  </Box>
                </TableCell>
                <TableCell>
                  <Box sx={{ textAlign: "center" }}>
                    <Typography>0</Typography>
                  </Box>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
          <Box sx={{ width: "97%", margin: "auto", paddingTop: "20px" }}>
            <TablePagination
              component="div"
              count={100}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </TableContainer>
      </Box>
    </>
  );
}
