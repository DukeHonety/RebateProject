import React from "react";
import { Typography, Box } from "@mui/material";
import productImage from "../../assets/images/productImage.png";
import TablePagination from "@mui/material/TablePagination";
import { makeStyles } from "@material-ui/core";
import {
  TableHead,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
//styling
const useStyles = makeStyles((theme) => ({
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
    display: "flex",
    width: "99%",
    [theme.breakpoints.down("sm")]: {
      width: "73%",
    },
    margin: "auto",
  },
  productImage: {
    height: "50px",
    width: "50px",
    marginRight: "10px",
  },
  ratingBox: {
    width: "60%",
    [theme.breakpoints.down("sm")]: {
      width: "47%",
    },
    margin: "auto",
  }
}));


export default function BillingHistory() {
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

  return (
    <>

      <Box>
        <TableContainer
          component={Paper}
          className={classes.tableInnerContent}
          sx={{
            width: "95%",
            margin: "auto",
            borderRadius: "20px",
          }}
        >
          <Table aria-label="simple table" sx={{ overflowX: "hidden" }}>
            <TableHead className={classes.tableheadingRow}>
              <TableRow>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Date
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Transaction ID
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      textAlign: "center",
                      width: "60%",
                      margin: "auto",
                    }}
                  >
                    <Typography
                      className={classes.tableCellheading}
                    >
                      Order ID
                    </Typography>

                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Product
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Box sx={{ display: "flex", textAlign: "center" }}>
                    <Typography
                      className={classes.tableCellheading}
                    >
                      Category
                    </Typography>

                  </Box>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Fee
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography
                    className={classes.tableCellContent}
                  >
                    10/06/2022
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    className={classes.tableCellContent}
                  >
                    SV-252123
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      width: {
                        xs: "70%",
                        sm: "80%",
                        md: "99%",
                        lg: "99%",
                        xl: "99%",
                      },
                      margin: "auto",
                    }}
                  >
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
                      <Typography>
                        Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                      <Typography sx={{ color: "#646464" }}>
                        SKU: GlobeUSA2
                    </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    Verified Review
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    $.49
                  </Typography>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  {" "}
                  <Typography
                    className={classes.tableCellContent}
                  >
                    10/06/2022
                  </Typography>
                </TableCell>
                <TableCell>
                  {" "}
                  <Typography
                    className={classes.tableCellContent}
                  >
                    SV-252123
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    118-986254-235656
                  </Typography>
                </TableCell>
                <TableCell>
                  <Box
                    sx={{
                      display: "flex",
                      width: {
                        xs: "70%",
                        sm: "80%",
                        md: "99%",
                        lg: "99%",
                        xl: "99%",
                      },
                      margin: "auto",
                    }}
                  >
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
                      <Typography>
                        Moon Lamp RGB Glow Remote Controlled...
                    </Typography>
                      <Typography sx={{ color: "#646464" }}>
                        SKU: GlobeUSA2
                    </Typography>
                    </Box>
                  </Box>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    Verified Review
                  </Typography>
                </TableCell>
                <TableCell>
                  <Typography
                    className={classes.tableCellContent}
                  >
                    $.49
                  </Typography>
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
