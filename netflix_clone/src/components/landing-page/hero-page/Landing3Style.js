import { Box, styled } from "@mui/material";

const Landing3Style = styled(Box)(({ theme }) => ({
  ".backgroundStyle": {
    backgroundColor: "black",
    height: "450px",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100vw",
    [theme.breakpoints.down("md")]: {
      height: "520px",
      backgroundSize: "216vw",
    },
  },
  ".container1": {
    margin: " auto",
    width: "70%",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      width: "93%",
    },
  },
  ".mobileImageStyle": {
    height: "370px",
    width: "500px",
    marginLeft: "-10px",
    [theme.breakpoints.down("md")]: {
      height: "280px",
      width: "345px",
      display: "block",
      marginLeft: "auto",
      marginRight: "auto",
    },
  },

  ".textStyle": {
    float: "right",
    width: "50%",
    marginTop: "80px",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
      marginTop: "30px",
    },
  },
  ".imgStyle": {
    float: "left",
    width: "50%",
    height: "15vh",

    [theme.breakpoints.down("md")]: {
      width: "100%",
      float: "none",
    },
  },
  ".text1Style": {
    color: "white",
    fontFamily: "Roboto",
    fontSize: "50px",
    fontWeight: "600",
    // marginRight: "100px",

    [theme.breakpoints.down("md")]: {
      fontFamily: "Roboto",
      fontSize: "30px",
      fontWeight: "500",
      margin: "10px",
      marginRight: "0px",
    },
  },
  ".text2Style": {
    color: "white",
    fontFamily: "Montserrat",
    fontSize: "20px",
    fontWeight: "500",
    // marginRight: "100px",
    marginTop: "15px",
    [theme.breakpoints.down("md")]: {
      fontFamily: "Montserrat",
      fontSize: "17px",
      fontWeight: "400",
      marginRight: "0px",
    },
  },
}));

export default Landing3Style;
