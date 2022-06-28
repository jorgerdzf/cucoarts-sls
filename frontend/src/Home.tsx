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
      minHeight: 600,
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
    <Container maxWidth="lg">
      <Box className={classes.headerBox} sx={{ flexGrow: 1 }}>
        <Header isMainPage={true} />
        <Grid
          container
          direction="row"
          justifyContent="flex-start"
          alignItems="center"
          sx={{ pt: 16 }}
        >
          <Grid item xs={6}>
            <Box sx={{ pl: 8, textAlign: "left" }}>
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
          <Grid item xs={6}>
            <Box sx={{ pl: 8 }}>
              <img src={img2} alt="Cuco Arts!" className={classes.img2} />
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box className={classes.s1Box} sx={{ mt: 6 }}>
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
      <Box sx={{ pl: 8, pt: 6, textAlign: "left" }}>
        <ServiceCards />
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Galery />
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Portfolio />
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <ContactForm />
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <SocialMedia />
      </Box>
      <Box sx={{ pt: 6 }}>
        <Footer />
      </Box>
    </Container>
  );
}
