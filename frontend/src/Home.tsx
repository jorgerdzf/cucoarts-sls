import React from "react";
//styles
import { createStyles, makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";
//material components
import {
  Box,
  Button,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Link,
  Typography,
} from "@mui/material";
//image assets
import img1 from "./assets/landing-img-1.png";
import img2 from "./assets/landing-img-2.png";
//components
import Header from "./Header";
import ServiceCards from "./ServiceCards";
import ContactForm from "./ContactForm";
import SocialMedia from "./SocialMedia";
import Footer from "./Footer";

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

const sections = [
  { title: "Historia", url: "#" },
  { title: "Servicios", url: "#" },
  { title: "Galeria", url: "#" },
  { title: "Portafolio", url: "#" },
  { title: "Contacto", url: "#" },
];

const serviceCards = [
  {
    title: "Art Hunting",
    text: "¿Qué es lo que te está llamando hoy? ¿Quieres crear algo original o quieres buscar ideas? Platícanos tu caso y te ayudamos a hacerlo realidad.",
    imageUrl: "service-img-1.png",
    button1Title: "Cotizar",
    button1Url: "",
    button2Title: "Ver Galeria",
    button2Url: "",
  },
  {
    title: "Murales",
    text: "Arte urbano para espacios públicos y privados. Buscamos el artista profesional ideal para tu proyecto y te ayudamos a hacerlo realidad.",
    imageUrl: "service-img-2.png",
    button1Title: "Cotizar",
    button1Url: "",
    button2Title: "Ver Galeria",
    button2Url: "",
  },
  {
    title: "Producción",
    text: "Para personas o negocios: Organizamos y lanzamos eventos culturales y proyectos en video desde cobertura o entrevistas personales.",
    imageUrl: "service-img-3.png",
    button1Title: "Cotizar",
    button1Url: "",
    button2Title: "Ver Galeria",
    button2Url: "",
  },
];

const galeryImages = [
  {
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
  },
  {
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
  },
  {
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
  },
];

const portfolioImages = [
  {
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
  },
  {
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
  },
  {
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
  },
];

const texts = {
  t1: "Descubre un mundo creativo",
  t2: "Cultural Collective (CUCO) es un lugar para sorprendernos y crecer creativamente a través de la gran comunidad que ya existe a nuestro alrededor.",
  t3: "Ver reel",
  t4: "Descubre, Conecta y Crece junto a todo el talento que te rodea!",
  t5: "¿Quieres conocernos mejor? - Te invitamos a leer nuestra historia",
  t6: "Servicios",
  t7: "Ayudamos activamente a promover el desarrollo artístico en todos los niveles: desde aficionado hasta gran maestro",
  t8: "Galería de Ideas",
  t9: "Encuentra obras de arte en diferentes estilos creadas por artistas profesionales alrededor del mundo.",
  t10: "Portafolio",
  t11: "Es una muestra de nuestra experiencia en producciones de eventos, artísticas o comerciales. Seguimos la filosofía del Colectivo: beneficio mútuo.",
  t12: "News & Exclusive",
  t13: "Recibe el trato preferencial que mereces y entérate de qué están creando los artistas hoy alrededor del mundo",
  t14: "Social Media",
  t15: "En comunicación constante con el mundo que nos rodea para construir la plataforma adecuada para el crecimiento cultural",
};

export default function Home() {
  const classes = useStyles();
  return (
    <Container maxWidth="lg">
      <Box className={classes.headerBox} sx={{ flexGrow: 1 }}>
        <Header title="Blog" sections={sections} />
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
      <Box className={classes.s1Box} sx={{mt: 6}}>
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
        <Typography variant="h4">{texts.t6}</Typography>
        <Typography variant="body1">{texts.t7}</Typography>
        <ServiceCards cards={serviceCards} />
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4">{texts.t8}</Typography>
          <Typography variant="body1">{texts.t9}</Typography>
          <ImageList sx={{ height: 350 }} cols={3} rowHeight={164}>
            {galeryImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Button variant="contained">Ver Mas </Button>
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4">{texts.t10}</Typography>
          <Typography variant="body1">{texts.t11}</Typography>
          <ImageList sx={{ height: 350 }} cols={3} rowHeight={164}>
            {portfolioImages.map((item) => (
              <ImageListItem key={item.img}>
                <img
                  src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                  srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                  alt={item.title}
                  loading="lazy"
                />
              </ImageListItem>
            ))}
          </ImageList>
        </Box>
        <Button variant="contained">Ver Mas </Button>
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t12}</Typography>
        <Typography variant="body1">{texts.t13}</Typography>
        <ContactForm />
        </Box>
      </Box>
      <Box sx={{ pl: 8, pt: 6 }}>
        <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t14}</Typography>
        <Typography variant="body1">{texts.t15}</Typography>
        </Box>
        <SocialMedia></SocialMedia>
      </Box>
      <Box>
        <Footer></Footer>
      </Box>
    </Container>
  );
}
