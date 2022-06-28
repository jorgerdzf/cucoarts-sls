import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { texts } from "../staticInfo/footer";

export default function Footer() {
  return (
    <React.Fragment>
      <AppBar position="static">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              {texts.t1}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {texts.t2}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {texts.t3}
            </Typography>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              {texts.t4}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
