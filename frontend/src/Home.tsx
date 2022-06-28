import React from "react";
//styles
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
//material components
import { Box, Container, Grid, Link, Typography } from "@mui/material";
//image assets
import img1 from "./assets/landing-img-1.png";
import img2 from "./assets/landing-img-2.png";
//static info
import { texts } from "./staticInfo/home";

//components
import Header from "./shared/Header";
import ServiceCards from "./shared/ServiceCards";
import ContactForm from "./shared/ContactForm";
import SocialMedia from "./shared/SocialMedia";
import Footer from "./shared/Footer";
import Portfolio from "./shared/Portfolio";
import Galery from "./shared/Galery";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    headerBox: {
      backgroundImage: `url(${img1})`,
      backgroundSize: "cover",
      height: 800,
    },
    s1Box: {
      backgroundImage: `url(${img1})`,
      minHeight: 120,
      backgroundSize: "cover",
      color: "#f5f5f5",
    },
    s2Box: {
      minHeight: 400,
    },
    headerText: {
      color: "#BDC8F0",
      fontWeight: "bolder !important",
    },
    img2: {
      minHeight: 300,
      backgroundSize: "cover",
    },
    links: {
      color: "#bdc8f0",
    },
  })
);

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBox}>
        <Header isMainPage={true} />
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="flex-end"
          pt={32}
        >
          <Grid item>
            <Box sx={{ pl: 6, textAlign: "left" }}>
              <Typography variant="h2" className={classes.headerText}>
                {texts.t1}
              </Typography>
              <br />
              <Typography variant="body2" className={classes.headerText}>
                {texts.t2}
              </Typography>
              <br />
              <Link href="#" className={classes.links}>
                {texts.t3}
              </Link>
            </Box>
          </Grid>
          <Grid item>
            <img src={img2} alt="Cuco Arts!" className={classes.img2} />
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.s1Box} sx={{ mt: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          sx={{ pt: 2 }}
        >
          <Grid item sx={{ fontStyle: "italic", m: 1 }}>
            <Typography variant="h4">{texts.t4}</Typography>
            <Typography variant="h5">{texts.t5}</Typography>
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="xl">
        <br></br>
        <ServiceCards />
        <br></br>
        <Galery />
        <br></br>
        <Portfolio />
        <br></br>
        <ContactForm />
        <br></br>
        <SocialMedia />
        <br></br>
      </Container>
      <Footer isMainPage={true} />
    </>
  );
}
