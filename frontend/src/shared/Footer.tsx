import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import { texts } from "../staticInfo/footer";

interface FooterProps {
  isMainPage: boolean;
}

export default function Footer(props: FooterProps) {
  const { isMainPage } = props;
  return (
    <React.Fragment>
      <AppBar 
        position="static"
        sx={isMainPage ? { pt: 4 } : { backgroundColor: "#111" }}
        >
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
