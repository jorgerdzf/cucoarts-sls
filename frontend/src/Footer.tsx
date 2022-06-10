import {
  AppBar,
  Toolbar,
  Typography,
} from "@mui/material";
import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              2022 Cultural Collective México S de RL de CV
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              hello@cucoarts.com
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              Términos y Condiciones
            </Typography>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              Aviso de Privacidad
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
