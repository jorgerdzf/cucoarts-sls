import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { options, texts } from "../staticInfo/contact";

export default function ContactForm() {
  return (
    <React.Fragment>
      <Box sx={{ textAlign: "left" }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4">{texts.t1}</Typography>
          <Typography variant="body1">{texts.t2}</Typography>
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch", alignItems: "middle" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label={options.fields.name.title}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={options.fields.lastName.title}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={options.fields.email.title}
              variant="outlined"
            />
            <Button size="large" variant="contained">
              {options.buttons.subscribe.title}
            </Button>
          </Box>
        </Box>
      </Box>
    </React.Fragment>
  );
}
