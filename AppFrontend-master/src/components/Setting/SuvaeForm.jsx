import React from "react";
import axios from "axios";
import { useSelector, useDispatch } from 'react-redux';
import { Typography, Box, Grid, Button } from "@mui/material";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import { makeStyles } from "@material-ui/core";
import question from "../../assets/images/question.png";
import { setSuvaeProfile } from "../../app/appSlice";
import { baseServerUrl } from "../../core/constant/base";
//styling
const useStyles = makeStyles((theme) => ({
  firstOuterBox: {
    backgroundColor: "white", padding: "20px"
  },
  firstInnerBox: {
    backgroundColor: "#F6F6F6", height: "200px"
  },
  firstBoxMainContent: {
    display: "flex", padding: "20px"
  },
  iconBox: {
    width: "50px",
    height: "50px",
    backgroundColor: "#E6E0F2",
    borderRadius: "50px",
    textAlign: "center",
  },
  billingIcon:{
    height: "25px",
    width: "25px",
    position: "relative",
    top: "10px",
  },
  secondBoxMain:{
    display: "flex",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
  },
  secondBoxMainContent:{
    width: "50px",
    height: "50px",
    backgroundColor: "#E6E0F2",
    borderRadius: "50px",
    textAlign: "center",
  },
  billingIcon2:{
    height: "20px",
    width: "20px",
    position: "relative",
    top: "15px",
  },
  thirdBoxContent:{
    width: "50px",
    height: "50px",
    backgroundColor: "#E6E0F2",
    borderRadius: "50px",
    textAlign: "center",
  },
  thirdBoxMain:{
    display: "flex",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingLeft: "20px",
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

const IOSSwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} value={props.value} />
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

export const SuvaeFormSetting = () => {
  const dispatch = useDispatch();
  const classes = useStyles();
  let suvaeProfile = useSelector(state => state.app.suvaeProfile);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const UpdateStatus = () => {
    let profile = {};
    profile['status'] = !suvaeProfile.status;
    dispatch(setSuvaeProfile(profile));
    handleClose();
  };

  const saveProfile = async () => {
    try {
      const response = await axios.post(`${baseServerUrl}/suvae`, suvaeProfile);
    }
    catch(e){
      console.log(e.message);
    }
  }

  return (
    <div>
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
              Are you sure?
            </Typography>
          </Box>
          <Divider />
          <Typography
            sx={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
              fontSize: "20px",
            }}
          >
            This action cannot be reverted.
          </Typography>
          <Box>
            <Box sx={{ textAlign: "center", paddingBottom: "40px" }}>
              <Button
                variant="outlined"
                sx={{
                  borderColor: "#7335FD",
                  marginRight: "10px",
                  color: "#7335FD",
                  fontWeight: "600",
                  textTransform: "capitalize",
                }}
                onClick={handleClose}
              >
                Cancel
              </Button>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#7335FD",
                  textTransform: "capitalize",
                  fontWeight: "600",
                }}
                onClick={UpdateStatus}
              >
                Confirm
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
      <Box sx={{ marginTop: "50px" }}>
        <Box
          sx={{
            backgroundColor: "white",
            width: { xs: "99%", sm: "99%", md: "70%", lg: "55%", xl: "55%" },
            margin: "auto",
            padding: "20px"
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box className={classes.thirdBoxMain}>
                <Box sx={{ display: "flex", alignItems: 'center' }}>
                  <Typography
                    sx={{
                      fontSize: "20px",
                      fontWeight: "700",
                      color: "black",
                    }}
                  >
                    Suvae-Form is active
                  </Typography>
                  <Tooltip
                    title="Disable this when suvae-form is updating"
                    placement="top-start"
                  >
                    <Box
                      component="img"
                      sx={{
                        height: "17px",
                        width: "17px",
                        position: "relative",
                        top: "-10px",
                      }}
                      alt="Your logo."
                      src={question}
                    />
                  </Tooltip>
                  <Box
                    sx={{
                      marginLeft: {
                        xs: "22px",
                        sm: "22px",
                        md: "40px",
                        lg: "60px",
                        xl: "60px",
                      },
                    }}
                  >
                    <Box onClick={handleOpen}>
                      <FormControlLabel control={<IOSSwitch checked={suvaeProfile.status} />}/>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Box sx={{ display: "flex", flexDirection: 'row-reverse', margin: '10px'}}>
            <Button variant="outlined" onClick={saveProfile}>Save</Button>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
