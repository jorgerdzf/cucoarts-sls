import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";
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
        <Toolbar>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
          <Grid item>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1, fontSize: 10 }}>
              {texts.t1}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2" component="div" sx={{ flexGrow: 1 }}>
              <Link href={`mailto:${texts.t2}`} sx={{ color: "#fff" }}>
                {texts.t2}
              </Link>
            </Typography>
          </Grid>
          <Grid item>
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
          </Grid>
          
          </Grid>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
