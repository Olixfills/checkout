import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import { Box, Button, Stack, Typography } from "@mui/material";

const Form = () => {
  const [number, setNumber] = useState("");

  const { inputStyle, labelStyle } = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack gap={3}>
          <Stack direction="row" gap={3}>
            <Stack gap={1} width="100%">
              <label htmlFor="ccNumber" className={labelStyle}>
                Credit card number
              </label>
              <input
                className={inputStyle}
                pattern="[0-9]*"
                type="tel"
                name="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </Stack>
            <Stack gap={1} width="100%">
              <label htmlFor="exp" className={labelStyle}>
                Expiration Date
              </label>
              <input className={inputStyle} type="text" name="exp" id="exp" />
            </Stack>
          </Stack>
          <Stack direction="row" gap={3}>
            <Stack gap={1} width="100%">
              <label htmlFor="secCode" className={labelStyle}>
                Security code
              </label>
              <input
                className={inputStyle}
                type="text"
                name="secCode"
                id="secCode"
              />
            </Stack>
            <Stack gap={1} width="100%">
              <label htmlFor="postal" className={labelStyle}>
                Postal Code
              </label>
              <input
                className={inputStyle}
                type="text"
                name="postal"
                id="postal"
              />
            </Stack>
          </Stack>
          <Stack gap={1}>
            <Box display="flex" gap={1} alignItems="center">
              <input type="radio" name="use-card" />
              <label htmlFor="use-card">
                <Typography variant="caption" sx={{ color: "#424242" }}>
                  Use this card for next time purchase
                </Typography>
              </label>
            </Box>
            <Box>
              <Button
                variant="contained"
                fullWidth
                sx={{ textTransform: "none", py: "12px", borderRadius: 1 }}
              >
                Add card
              </Button>
            </Box>
          </Stack>
        </Stack>
      </form>
    </>
  );
};

const useStyles = makeStyles({
  inputStyle: {
    width: "100%",
    padding: "12px 14px",
    background: "rgba(0, 0, 0, 0.09)",
    outline: "none",
    boxShadow: "none",
    border: "1px solid rgba(0, 0, 0, 0.1)",
    borderRadius: 4,
  },
  labelStyle: {
    fontSize: "0.9rem",
    color: "#424242",
  },
});

export default Form;
