import React from "react";
//styles
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
//material components
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
//image assets
import img1 from "./assets/landing-img-1.png";
//static info
import { texts, carousel } from "./staticInfo/home";
// 3rd patry libraries
import Carousel from "react-material-ui-carousel";
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

function Item(props: any) {
  return (
      <ImageList sx={{ overflow:'hidden' }} cols={1} rowHeight={400}>
        <ImageListItem>
          <img
            src={`${props.item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${props.item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={props.item.name}
            loading='lazy'
          />
        </ImageListItem>
      </ImageList>
  );
}

export default function Home() {
  const classes = useStyles();
  return (
    <>
      <Box className={classes.headerBox}>
        <Header isMainPage={true} />
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
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
              <Carousel height={400} sx={{width:600}}>
                {carousel.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
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
        <br></br>
        <ServiceCards />
        <br></br>
        <br></br>
        <Galery isFullGalery={false} />
        <br></br>
        <br></br>
        <Portfolio />
        <br></br>
        <br></br>
        <ContactForm />
        <br></br>
        <br></br>
        <SocialMedia />
        <br></br>
        <br></br>
      </Container>
      <br></br>
      <br></br>
      <Footer isMainPage={true} />
    </>
  );
}
