import React from "react";
import {
  Typography,
  Box,
  Button,
  TableHead,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
} from "@mui/material";
import InfoIcon from "@mui/icons-material/Info";
import Rating from "@mui/material/Rating";
import Tooltip from "@mui/material/Tooltip";
import TablePagination from "@mui/material/TablePagination";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import productImage from "../../assets/images/productImage.png";
import lock from "../../assets/images/lock.png";
import { getDateStr } from "../../core/constant/base";

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

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
  borderRadius: "10px",
};

export default function ProductsTable() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [comment, setComment] = React.useState('');

  const submissions = useSelector((state) => state.app.submissions);
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
                    Order ID
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Typography
                    className={classes.tableCellheading}
                  >
                    Product
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
                      Customer Rating
                    </Typography>
                    <Box>
                      <Tooltip
                        title="Feedback from Form Submission"
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
                    Submission Date
                  </Typography>
                </TableCell>
                <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                  <Box sx={{ display: "flex", textAlign: "center" }}>
                    <Typography
                      className={classes.tableCellheading}
                    >
                      Customer Info
                    </Typography>
                    <Box>
                      <Tooltip
                        title="Name and Email address of your customer"
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
                    Review Status
                  </Typography>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {
              submissions.map((submission, index) => {
                return (
                  <TableRow key={index}>
                    <TableCell>
                      {" "}
                      <Typography
                        className={classes.tableCellContent}
                      >
                        {submission.order_id}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {" "}
                      <Box
                        className={classes.productContent}
                      >
                        <Box
                          component="img"
                          className={classes.productImage}
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
                      <Box
                        className={classes.ratingBox}
                      >
                        <Rating
                          name="simple-controlled"
                          value={submission.enjoy}
                          size="large"
                        />
                        <Button
                          variant="contained"
                          sx={{
                            color: "white",
                            backgroundColor: "black",
                            borderRadius: "10px",
                            marginTop: "10px",
                            textTransform: "capitalize",
                            paddingLeft: "25px",
                            paddingRight: "25px",
                          }}
                          onClick={() => {
                            setComment(submission.comment)
                            handleOpen();
                          }}
                        >
                          View Comment
                        </Button>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ textAlign: "center" }}>
                        <Typography
                          className={classes.tableCellContent}
                        >
                          {getDateStr(new Date(submission.date))}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ textAlign: "center" }}>
                        <Box sx={{ textAlign: "center" }}>
                          <Tooltip title="Enable in Billing" placement="top-start">
                            <Box
                              component="img"
                              alt="Your logo."
                              src={lock}
                            />
                          </Tooltip>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell>
                      <Box sx={{ textAlign: "center" }}>
                        <Button
                          variant="contained"
                          sx={{
                            color: "white",
                            backgroundColor: "#FDA700",
                            borderRadius: "10px",
                            marginTop: "10px",
                            textTransform: "capitalize",
                            paddingLeft: "35px",
                            paddingRight: "35px",
                          }}
                        >
                          Pending
                        </Button>
                      </Box>
                    </TableCell>
                  </TableRow>
                )
              })
            }
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

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box
            sx={{
              paddingBottom: "20px",
              paddingTop: "20px",
              paddingLeft: "20px",
              paddingRight: "20px",
            }}
          >
            <Box sx={{ textAlign: "right" }}>
              <CloseIcon onClick={handleClose} style={{ cursor: "pointer" }} />
            </Box>

            <Typography
              id="modal-modal-title"
              sx={{
                textAlign: "center",
                marginTop: "-30px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              Comment
            </Typography>
          </Box>
          <Divider />
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "50px",
              fontSize: "20px",
            }}
          >
            {comment}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
