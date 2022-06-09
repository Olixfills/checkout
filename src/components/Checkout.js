import { Button, Stack, Typography } from "@mui/material";
import React from "react";

const Checkout = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      py={4}
      marginBottom={4}
    >
      <Button variant="contained" px={2}>
        Complete payment
      </Button>
      <Typography variant="h6" sx={{ fontWeight: "600" }}>
        TOTAL: ₦2556.64
      </Typography>
    </Stack>
  );
};

export default Checkout;
