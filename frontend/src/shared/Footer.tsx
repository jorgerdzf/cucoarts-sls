import { AppBar, Link, Toolbar, Typography } from "@mui/material";
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
        sx={isMainPage ? { pt:1 } : { backgroundColor: "#111" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <div>
            <Typography variant="body1" component="div" sx={{ flexGrow: 1 }}>
              {texts.t1}
            </Typography>
          </div>
          <div>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              <Link href={`mailto:${texts.t2}`} sx={{ color: "#fff" }}>
                {texts.t2}
              </Link>
            </Typography>
          </div>
          <div>
            {/* <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/conditions" sx={{ color: "#fff" }}>
                {texts.t3}
              </Link>
            </Typography> */}
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              <Link href="/privacy" sx={{ color: "#fff" }}>
                {texts.t4}
              </Link>
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
