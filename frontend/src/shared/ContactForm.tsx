import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import { options, texts } from "../staticInfo/contact";

export default function ContactForm() {
  return (
    <React.Fragment>
      <Box sx={{ textAlign: "center" }}>
        <Box sx={{ textAlign: "center", pt:2 }}>
          <Typography variant="h4">{texts.t1}</Typography>
          <Typography variant="body1">{texts.t2}</Typography>
          <Box 
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch", alignItems: "middle" },
              pt:2
            }}
            noValidate
            autoComplete="off"
          >
            {/* <TextField
              id="outlined-basic"
              label={options.fields.name.title}
              variant="outlined"
            />
            <TextField
              id="outlined-basic"
              label={options.fields.lastName.title}
              variant="outlined"
            /> */}
            <TextField
              id="outlined-basic"
              label={options.fields.email.title}
              variant="outlined"
            />
             <TextField
              id="outlined-basic"
              label={options.fields.phoneNumber.title}
              variant="outlined"
            />
             {/* <TextField
              id="outlined-basic"
              label={options.fields.description.title}
              variant="outlined"
            /> */}
          </Box>
        </Box>
        <Box sx={{pt:2}}>
        <Button size="large" variant="contained">
              {options.buttons.subscribe.title}
            </Button>
        </Box>
      </Box>
    </React.Fragment>
  );
}
