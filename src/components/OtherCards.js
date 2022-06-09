import React from "react";
import Visa from "../assets/visa.png";
import Paypal from "../assets/paypal.png";
import Discover from "../assets/discover.png";
import { Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";

const OtherCards = () => {
  const { img } = useStyles();
  return (
    <Stack gap={4} direction="row" justifyContent="end">
      <img className={img} src={Visa} alt="" />
      <img className={img} src={Discover} alt="" />
      <img className={img} src={Paypal} alt="" />
    </Stack>
  );
};

const useStyles = makeStyles({
  img: {
    height: "20px",
  },
});

export default OtherCards;
