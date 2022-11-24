import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Box, Typography, Button } from "@mui/material";
import axios from 'axios';
import heroImage from "../assets/images/heroImage.png";
import formBg from "../assets/images/formBg.png";
import lightBg from "../assets/images/lightBg.png";
import help from "../assets/images/help.png";
import help1 from "../assets/images/help1.svg";
import MaskedInput from "react-text-mask";
import { setUserName } from "../app/appSlice";

export default function HeroSection() {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [message, setMessage] = useState("");
  const [orderId, setOrderId] = useState("");
  const [orderError, setOrderError] = useState(false);

  const handleChange = (event) => {
    const result = event.target.value.replace(/[^a-z]/gi, "");
    setMessage(result);
  };
  const onClaimButtonClick = async() => {
    let response;
    try {
      response = await axios.post(`http://localhost:5000/checkorder`, {
        order: orderId
      });
    } catch (error) {
      console.log("[ERROR][GROUPS][CREATE]: ", error.message);
      setOrderError(true);
      return;
    }
    dispatch(setUserName(message));
    dispatch(setUserName(orderId));
    let path = `/rating`;
    setOrderError(false);
    navigate(path);
    
  };

  return (
    <>
      <Box>
        <Box
          sx={{
            backgroundImage: `url(${heroImage})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            height: "100%",
            width: "100%",
            paddingTop: "50px",
            paddingBottom: "50px",
          }}
        >
          <Box
            sx={{
              width: {
                xs: "100%",
                sm: "100%",
                md: "80%",
                lg: "49%",
                xl: "49%",
              },
              margin: "auto",
            }}
          >
            <Box
              sx={{
                backgroundImage: `url(${formBg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center",
                paddingTop: "130px",
                paddingBottom: "130px",
              }}
            >
              <Box
                sx={{
                  backgroundImage: `url(${lightBg})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  paddingTop: "30px",
                  paddingBottom: "30px",
                  width: {
                    xs: "90%",
                    sm: "90%",
                    md: "90%",
                    lg: "75%",
                    xl: "75%",
                  },
                  borderRadius: "20px",
                  margin: "auto",
                }}
              >
                <Box sx={{ width: "80%", margin: "auto" }}>
                  <Box>
                    <Typography
                      sx={{
                        textAlign: "center",
                        fontSize: {
                          xs: "16px",
                          sm: "16px",
                          md: "20px",
                          lg: "24px",
                          xl: "24px",
                        },
                        fontWeight: "700",
                        color: "#272B36",
                        fontFamily: "Merriweather",
                      }}
                    >
                      Fill Out The Form Below To Redeem Your Reward!
                    </Typography>
                    <Typography
                      sx={{
                        color: "#7335FD",
                        textAlign: "center",
                        fontSize: {
                          xs: "14px",
                          sm: "14px",
                          md: "14px",
                          lg: "16px",
                          xl: "16px",
                        },
                        marginTop: "10px",
                      }}
                    >
                      {" "}
                      No Strings Attached | No Credit Card Required!
                    </Typography>
                  </Box>
                  <Box sx={{ marginTop: "30px" }}>
                    <input
                      style={{
                        color: "grey",
                        fontSize: "16px",
                        width: "99%",
                        margin: "auto",
                        height: "50px",
                        textAlign: "center",
                        border: "1px solid lightgray",
                        marginTop: "20px",
                        borderRadius: "5px",
                      }}
                      placeholder="NAME (USED ON AMAZON)"
                      id="message"
                      name="message"
                      type="text"
                      value={message}
                      onChange={handleChange}
                    />

                    <Box>
                      <MaskedInput
                        style={{
                          color: "grey",
                          fontSize: "16px",
                          width: "99%",
                          margin: "auto",
                          height: "50px",
                          textAlign: "center",
                          border: "1px solid lightgray",
                          marginTop: "20px",
                          borderRadius: "5px",
                        }}
                        placeholder="AMAZON ORDER NUMBER"
                        mask={[
                          /[1-9]/,
                          /\d/,
                          /\d/,

                          "-",
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          "-",
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                          /\d/,
                        ]}
                        value={orderId}
                        onChange={(event) => setOrderId(event.target.value)}
                      />
                    </Box>
                    <Button
                      variant="contained"
                      sx={{
                        background:
                          "linear-gradient(90deg, #FB8F66 0%, #7033FF 100%)",
                        width: "100%",
                        marginTop: "20px",
                        paddingTop: "15px",
                        paddingBottom: "15px",
                        color: "white",
                        fontWeight: "600",
                      }}
                      onClick={onClaimButtonClick}
                    >
                      Claim!
                    </Button>
                    {orderError && (
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "center",
                          marginTop: "20px",
                        }}
                      >
                        <img
                          src={`${help1}`}
                          height="20px"
                          alt="logo2"
                          style={{ marginRight: "10px" }}
                        />
                        <Typography
                          sx={{
                            color: "#FF5D29",
                            fontSize: {
                              xs: "14px",
                              sm: "14px",
                              md: "16px",
                              lg: "16px",
                              xl: "16px",
                            },
                          }}
                        >
                          Invalid Order Number
                        </Typography>
                      </Box>
                    )}
                    <Box sx={{ display: "flex", marginTop: "20px" }}>
                      <img
                        src={`${help}`}
                        height="20px"
                        alt="logo2"
                        style={{ marginRight: "10px" }}
                      />
                      <Typography
                        sx={{
                          marginTop: "10px",
                          fontSize: {
                            xs: "14px",
                            sm: "14px",
                            md: "16px",
                            lg: "16px",
                            xl: "16px",
                          },
                        }}
                      >
                        We don’t share your personal info with anyone. Check out
                        our{" "}
                        <span style={{ color: "#7335FD" }}>Privacy Policy</span>{" "}
                        for more information.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
