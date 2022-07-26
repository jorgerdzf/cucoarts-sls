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
      height: 900,
    },
    s1Box: {
      backgroundImage: `url(${img1})`,
      height: 120,
      backgroundSize: "cover",
      color: "#f5f5f5",
    },
    s2Box: {
      height: 400,
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
      color: "#fff",
    },
  })
);

function Item(props: any) {
  return (
    <ImageList sx={{ overflow:'hidden' }} cols={1} rowHeight={600}>
      <ImageListItem>
        <img
          src={`${props.item.img}`}
          srcSet={`${props.item.img}`}
          alt={props.item.name}
          loading="lazy"
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
        <Box sx={{mt:10}}>
          <Grid
            container
            direction="row"
            justifyContent="space-evenly"
            alignItems="flex-end"
          >
            <Grid item>
              <Box sx={{ textAlign: "left" }}>
                <Typography variant="h2" className={classes.headerText}>
                  {texts.t1}
                </Typography>
                <br />
                <Typography variant="body2" className={classes.headerText}>
                  {texts.t2}
                </Typography>
                <br />
                <Link
                  href="https://www.instagram.com/p/CffJRhXgugs/"
                  target={"_blank"}
                  sx={{ color: "#fff", fontSize: 24 }}
                >
                  {texts.t3}
                </Link>
              </Box>
            </Grid>
            <Grid item>
              <Carousel height={500} sx={{width:600}}>
                {carousel.map((item, i) => (
                  <Item key={i} item={item} />
                ))}
              </Carousel>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <br></br>
      <br></br>
      <Box className={classes.s1Box}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item sx={{ fontStyle: "italic", pt:4 }}>
            <Typography variant="h4">{texts.t4}</Typography>
            {/* TODO: v2 agregar componente de historia <Typography variant="h5">{texts.t5}<Link sx={{color: '#fff'}}>historia</Link></Typography> */}
          </Grid>
        </Grid>
      </Box>
      <Container maxWidth="xl">
        <Box sx={{ pt: 6 }}>
          <ServiceCards />
        </Box>
        <Box sx={{ pt: 6 }}>
          <Galery isFullGalery={false} />
        </Box>
        <Box sx={{ pt: 6 }}>
          <Portfolio isFullPortfolio={false} />
        </Box>
        <Box sx={{ pt: 6 }}>
          <ContactForm />
        </Box>
        <Box sx={{ pt: 6 }}>
          <SocialMedia />
        </Box>
      </Container>
      <Box sx={{ pt: 6 }}>
        <Footer isMainPage={true} />
      </Box>
    </>
  );
}
