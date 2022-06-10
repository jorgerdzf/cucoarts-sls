import {
  Box,
  Button,
  TextField,
} from "@mui/material";
import React from "react";

export default function ContactForm() {
  return (
    <React.Fragment>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch", alignItems: "middle" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Nombre" variant="outlined" />
        <TextField id="outlined-basic" label="Apellido" variant="outlined" />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
        <Button size="large" variant="contained">
          Suscribete
        </Button>
      </Box>
    </React.Fragment>
  );
}
