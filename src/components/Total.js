import React from "react";
import { Box, Divider, Stack, Typography } from "@mui/material";

const Tot = ({ head, amount, sub }) => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box display="flex" alignItems="center">
        <Typography variant="subtitle2" sx={{ fontWeight: "600" }}>
          {head}
        </Typography>
        <Typography sx={{ color: "rgba(0, 0, 0, 0.3)" }}>{sub}</Typography>
      </Box>
      <Typography variant="subtitle1" sx={{ fontWeight: "600" }}>
        {amount}
      </Typography>
    </Stack>
  );
};

const Total = () => {
  return (
    <Stack gap={2}>
      <Divider />
      <Tot head="Subtotal" amount="₦2,497.00" />
      <Tot head="Estimated TAX" amount="₦119.64" />
      <Tot head="Promotional Code:" sub="Z4KXLM9A" amount="₦-60.00" />
      <Divider sx={{ py: 1 }} />
    </Stack>
  );
};

export default Total;
