import * as React from "react";
import {
  Divider,
  Typography,
  Box,
  Button,
  Grid,
  Link,
  TextField,
  TableHead,
  Modal,
  CircularProgress,
  TableBody,
  Table,
  TableCell,
  TableContainer,
  InputLabel,
  FormControl,
  MenuItem,
  Select,
  TableRow,
  Paper,
  Fade,
} from "@mui/material";

import flag1 from "../../assets/images/flag1.png";
import flag2 from "../../assets/images/flag2.png";
import flag3 from "../../assets/images/flag3.png";
import flag4 from "../../assets/images/flag4.png";
import flag5 from "../../assets/images/flag5.png";
import flag6 from "../../assets/images/flag6.png";
import flag7 from "../../assets/images/flag7.png";
import flag8 from "../../assets/images/flag8.png";
import step1 from "../../assets/images/settingStep1.png";
import step2 from "../../assets/images/settingStep2.png";
import layout from "../../assets/images/layout.png";
import CloseIcon from "@mui/icons-material/Close";
import CustomizedAccordions from "./Accordian";
import RegionSelector from "./RegionSelector";
import AccountDetials from "./AccountDetails";
import { makeStyles } from "@material-ui/core";

//styling
const useStyles = makeStyles((theme) => ({
  step1Image:{
    width: "40%", margin: "auto"
  },
  stepInnerConnect:{
      width: "90%",
      margin: "auto",
      paddingTop: "30px",
      paddingBottom: "20px",
  },
  accountDetailsBox:{
    paddingTop: "40px", width: "90%", margin: "auto"
  },
  accountDetailsinnerBox:{
    paddingTop: "20px", width: "90%", margin: "auto", paddingBottom:"30px"
  },
  accountDetailsFormBox:{
    width: "80%", margin: "auto"
  },
  tableInnerContent: {
    padding: "40px",
    [theme.breakpoints.down("sm")]: {
      padding: "10px",
    },
    marginTop: "40px",
  },
  flagsBox:{
    display:"flex",
    [theme.breakpoints.down("sm")]: {
      display:"inline-block",
    },
  },
  flagsBoxContent:{
    marginTop:"0px",
    [theme.breakpoints.down("sm")]: {
      marginTop:"5px",
    },
  },
  selectBtnStyle:{
    width: "40%",
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
    marginLeft: "auto",
    height: "40px",
  }
}));

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 560,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: "5px",
};
export const AmazonSetting = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const timerRef = React.useRef();
  const [query, setQuery] = React.useState("idle");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
    setOpen2(false);
  };
  const handleClose = () => setOpen(false);
  const [open2, setOpen2] = React.useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
  const [open1, setOpen1] = React.useState(false);

  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  const handleOpen1 = () => {
    setOpen1(true);
    setOpen(false);
  };
  const handleClose1 = () => setOpen1(false);
  const handleBackStep2 = () => {
    setOpen1(false);
    setOpen(true);
  };
  const handleBackStep1 = () => {
    setOpen(false);
  };
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const handleClickQuery = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }

    setQuery("progress");
    timerRef.current = window.setTimeout(() => {
      setQuery("success");
      setOpen1(false);
    }, 4000);
  };
  const onChangeTabAmazonAccount = () => {
    setOpen2(true);
  };

  return (
    <div>
      <Modal
        open={open1}
        onClose={handleClose1}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ paddingTop: "40px", width: "90%", margin: "auto" }}>
            <Grid container spacing={2}>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#7335FD",
                    }}
                  >
                    Connect to Amazon
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                <Box sx={{ textAlign: "right" }}>
                  <CloseIcon
                    onClick={handleClose1}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider
            sx={{ marginTop: "20px", marginBottom: "20px" }}
          />
          <Box sx={{ width: "40%", margin: "auto" }}>
            <img src={`${step2}`} alt="step1" />
          </Box>
          <Box
             className={classes.stepInnerConnect}
          >
            <Typography
              sx={{ fontSize: "14px", color: "#1E090E", fontWeight: "500" }}
            >
              Seller Central Account Sync
            </Typography>
            <Box sx={{ width: "40%", margin: "auto" }}>
              <img src={`${layout}`} alt="step1" />
            </Box>
            <Typography
              sx={{ fontSize: "14px", color: "#8B8FA3", textAlign: "center" }}
            >
              Login to Amazon to sync your Central Seller Acount
            </Typography>

            <AccountDetials />

            <Box>
              <Fade
                in={query === "progress"}
                style={{
                  transitionDelay: query === "progress" ? "800ms" : "0ms",
                }}
                unmountOnExit
              >
                <Box sx={{ width: "10%", margin: "auto", paddingTop: "15px" }}>
                  <CircularProgress />
                </Box>
              </Fade>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Button
                variant="contained"
                sx={{ backgroundColor: "#B656FF", textTransform: "capitalize" }}
                onClick={handleClickQuery}
              >
                Authanticate Seller Account
              </Button>
            </Box>
            <Box sx={{ textAlign: "center", marginTop: "20px" }}>
              <Link href="#" sx={{ fontWeight: "600", fontSize: "14px" }}>
                {" "}
                Having Trouble?
              </Link>
            </Box>

            <Box sx={{ marginTop: "40px" }}>
              <Grid container>
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Button
                    variant="outlined"
                    sx={{ border: "1px solid #7335FD", color: "#7335FD" }}
                    onClick={handleBackStep2}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ textAlign: "right" }}></Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box sx={{ paddingTop: "40px", width: "90%", margin: "auto" }}>
            <Grid container spacing={2}>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#7335FD",
                    }}
                  >
                    Connect to Amazon
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                <Box sx={{ textAlign: "right" }}>
                  <CloseIcon onClick={handleClose} sx={{ cursor: "pointer" }} />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider
           sx={{ marginTop: "20px", marginBottom: "20px" }}
          />
          <Box className={classes.step1Image}>
            <img src={`${step1}`} alt="step1" />
          </Box>
          <Box
           className={classes.stepInnerConnect}
          >
            <Typography sx={{ fontSize: "14px", color: "#1E090E" }}>
              Select your Amazon seller Central region and primary marketplace.
              We will also add all of your Amazonaccounts foor that region.
            </Typography>
            <Typography
              sx={{ fontSize: "14px", color: "#1E090E", marginTop: "15px" }}
            >
              Operate in multiple marketplaces? Don’t worry, you will be able to
              add them through your User Setting page Later.
            </Typography>

            <CustomizedAccordions />
            <RegionSelector />
            <Box sx={{ marginTop: "40px" }}>
              <Grid container>
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Button
                    variant="outlined"
                    sx={{ border: "1px solid #7335FD", color: "#7335FD" }}
                    onClick={handleBackStep1}
                  >
                    Back
                  </Button>
                </Grid>
                <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                  <Box sx={{ textAlign: "right" }}>
                    <Button
                      variant="contained"
                      sx={{ backgroundColor: "#B656FF" }}
                      onClick={handleOpen1}
                    >
                      Next
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
      </Modal>

      <Modal
        open={open2}
        onClose={handleClose2}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Box className={classes.accountDetailsBox}>
            <Grid container spacing={2}>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}></Grid>
              <Grid xs={6} sm={6} md={6} lg={6} xl={6}>
                <Box sx={{ textAlign: "center" }}>
                  <Typography
                    sx={{
                      fontSize: "18px",
                      fontWeight: "600",
                      color: "#7335FD",
                    }}
                  >
                    Account Details
                  </Typography>
                </Box>
              </Grid>
              <Grid xs={3} sm={3} md={3} lg={3} xl={3}>
                <Box sx={{ textAlign: "right" }}>
                  <CloseIcon
                    onClick={handleClose2}
                    sx={{ cursor: "pointer" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Box>
          <Divider
            sx={{ width: "100%", marginTop: "20px", marginBottom: "20px" }}
          />

          <Box
           className={classes.accountDetailsinnerBox}
          >
            <Box 
            className={classes.accountDetailsFormBox}
            >
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginBottom: "5px",
                }}
              >
                Account Nickname
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder="Newt"
                variant="outlined"
                sx={{ width: "100%" }}
              />
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "500",
                  marginTop: "15px",
                  marginBottom: "5px",
                }}
              >
                Seller Central Email Address
              </Typography>
              <TextField
                id="outlined-basic"
                placeholder="newt@gmail.com"
                variant="outlined"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ marginTop: "30px", textAlign: "center" }}>
              <Button
                variant="outlined"
                sx={{
                  border: "1px solid #7335FD",
                  color: "#7335FD",
                  margin: "5px",
                }}
                onClick={handleClose2}
              >
                Cancel
              </Button>

              <Button
                variant="contained"
                sx={{ backgroundColor: "#B656FF", margin: "5px" }}
                onClick={handleOpen}
              >
                Save
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ width: "90%", margin: "auto", paddingTop: "50px" }}>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: "400",
            color: "#716E6F",
            paddingTop: "20px",
            paddingBottom: "20px",
          }}
        >
          This is how your Amazon Seller Account syncs with Suvae.
        </Typography>
        <Box>
          <TableContainer
            component={Paper}
            className={classes.tableInnerContent}
          >
            <Typography
              sx={{
                fontSize: "18px",
                fontWeight: "600",
                color: "#7335FD",
                paddingBottom: "20px",
              }}
            >
              Amazon Seller Accounts
            </Typography>
            <Table aria-label="simple table" sx={{ overflowX: "hidden" }}>
              <TableHead sx={{ backgroundColor: "#F6F7F8" }}>
                <TableRow>
                  <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                    No
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                    Account Name
                  </TableCell>
                  <TableCell sx={{ fontSize: "16px", color: "#8B8FA3" }}>
                    Market
                  </TableCell>
                  <TableCell
                    sx={{ fontSize: "16px", color: "#8B8FA3" }}
                  ></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>1</TableCell>
                  <TableCell>Newt</TableCell>
                  <TableCell>
                    <Box
                      className={classes.flagsBox}
                    >
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag1}`}
                          alt="flag1"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                         className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag2}`}
                          alt="flag2"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                          className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag3}`}
                          alt="flag3"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {" "}
                    <Box sx={{ width: "100%", marginRight: "auto" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                          className={classes.selectBtnStyle}
                        >
                          <MenuItem>Account Details</MenuItem>
                          <MenuItem>Delete Account</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Avisso</TableCell>
                  <TableCell>
                  <Box
                      className={classes.flagsBox}
                    >
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag1}`}
                          alt="flag1"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                       className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag2}`}
                          alt="flag2"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag3}`}
                          alt="flag3"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: "100%", marginRight: "auto" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                          className={classes.selectBtnStyle}
                        >
                          <MenuItem>Account Details</MenuItem>
                          <MenuItem>Delete Account</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>3</TableCell>
                  <TableCell>Europe Avviso</TableCell>
                  <TableCell>
                  <Box
                      className={classes.flagsBox}
                    >
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag4}`}
                          alt="flag4"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag5}`}
                          alt="flag5"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                         className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag6}`}
                          alt="flag6"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                         className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag7}`}
                          alt="flag7"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                      <Box
                        className={classes.flagsBoxContent}
                      >
                        <img
                          src={`${flag8}`}
                          alt="flag8"
                          style={{ marginRight: "10px" }}
                        />
                      </Box>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Box sx={{ width: "100%", marginRight: "auto" }}>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select
                          labelId="demo-simple-select-label"
                          id="demo-simple-select"
                          value={age}
                          onChange={handleChange}
                         className={classes.selectBtnStyle}
                        >
                          <MenuItem>Account Details</MenuItem>
                          <MenuItem>Delete Account</MenuItem>
                        </Select>
                      </FormControl>
                    </Box>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#7335FD",
                fontSize: "14px",
                textTransform: "capitalize",
                marginTop: "30px",
              }}
              onClick={handleOpen2}
            >
              Add New
            </Button>
          </TableContainer>
        </Box>
      </Box>
    </div>
  );
};
