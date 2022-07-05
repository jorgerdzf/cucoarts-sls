import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { texts } from "../staticInfo/services";
import WebhookIcon from "@mui/icons-material/Webhook";
import BrushIcon from "@mui/icons-material/Brush";
import TheatersIcon from "@mui/icons-material/Theaters";
import BookmarksIcon from "@mui/icons-material/Bookmarks";
import Portfolio from "../shared/Portfolio";
import EstimateCost from "../shared/EstimateCost";
import Footer from "../shared/Footer";
import Header from "../shared/Header";

function Services() {
  return (
    <>
      <Header isMainPage={false} />
      <Container maxWidth="lg">
        <Box sx={{ textAlign: "left", pt: 8 }}>
          <Typography variant="h3">{texts.t1}</Typography>
          <br></br>
          <Typography variant="body1">{texts.t3}</Typography>
        </Box>
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pt={6}
        >
          <Grid item>
            <WebhookIcon sx={{ fontSize: 64 }}></WebhookIcon>
          </Grid>
          <Grid item pl={2}>
            <Typography variant="h4">{texts.t4}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ pl: 10, textAlign: "left" }}>
          <Typography variant="body1">{texts.t5}</Typography>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pt={6}
        >
          <Grid item>
            <BrushIcon sx={{ fontSize: 64 }}></BrushIcon>
          </Grid>
          <Grid item pl={2}>
            <Typography variant="h4">{texts.t9}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ pl: 10, textAlign: "left" }}>
          <Typography variant="body1">{texts.t10}</Typography>
        </Box>

        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          pt={6}
        >
          <Grid item>
            <TheatersIcon sx={{ fontSize: 64 }}></TheatersIcon>
          </Grid>
          <Grid item pl={2}>
            <Typography variant="h4">{texts.t11}</Typography>
          </Grid>
        </Grid>
        <Box sx={{ pl: 10, textAlign: "left" }}>
          <Typography variant="body1">{texts.t12}</Typography>
        </Box>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 4 }}
        >
          <Grid item>
            <Grid
              container
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Grid item sx={{ pt: 4 }}>
                <Button variant="contained" href="https://forms.gle/XfhCkYQjLHzKGD9n6" target="_blank">
                  <BookmarksIcon /> &nbsp;
                  {texts.t6}
                </Button>
              </Grid>
              <Grid item sx={{ pt: 4 }}>
                <Button variant="contained" href='/portfolio'>
                  <BookmarksIcon /> &nbsp;
                  {texts.t7}
                </Button>
              </Grid>
              <Grid item sx={{ pt: 4 }}>
                <Button variant="contained" href='/galery'>
                  <BookmarksIcon /> &nbsp;
                  {texts.t8}
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <br></br>
      <Footer isMainPage={false} />
    </>
  );
}

export default Services;
