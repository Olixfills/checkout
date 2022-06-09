import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Mastecard from "../assets/mastercard.png";
import Form from "./Form";
import OtherCards from "./OtherCards";

const Card = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} gap={10} py={5}>
      <Stack gap={3}>
        <Box>
          <Typography variant="subtitle1" fontWeight={600}>
            Payment Information
          </Typography>
          <Typography sx={{ fontSize: "0.85rem", color: "#7f7f7f" }}>
            Choose your method of payment
          </Typography>
        </Box>
        <Box
          component="img"
          src={Mastecard}
          alt="card"
          sx={{ borderRadius: 4 }}
        />
      </Stack>
      <Stack width="100%" gap={4}>
        <OtherCards />
        <Form />
      </Stack>
    </Stack>
  );
};

export default Card;
