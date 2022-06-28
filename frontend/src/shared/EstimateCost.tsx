import { Box, Typography, TextField, Button, FormControl } from "@mui/material";
import { options, texts } from "../staticInfo/estimateCost";

function EstimateCost() {
  return (
    <>
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
            <TextField
              id="outlined-basic"
              label={options.fields.phoneNumber.title}
              variant="outlined"
            />
            <FormControl fullWidth sx={{ m: 1 }}>
              <TextField
                id="outlined-basic"
                label={options.fields.description.title}
                variant="outlined"
                multiline
                rows={4}
              />
            </FormControl>
            <Button size="large" variant="contained">
              {options.buttons.send.title}
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default EstimateCost;
