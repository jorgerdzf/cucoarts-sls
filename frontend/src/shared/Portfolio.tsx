import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Container,
  IconButton,
  ImageListItemBar,
  Link,
} from "@mui/material";
import React from "react";
import {
  texts,
  images,
  artHunting,
  murals,
  events,
  production,
} from "../staticInfo/portfolio";
import FullscreenIcon from '@mui/icons-material/Fullscreen';

interface PortfolioProps {
  isFullPortfolio: boolean;
}

function Portfolio(props: PortfolioProps) {
  const s3uri =
    "https://cucoarts-image-assets.s3.us-east-2.amazonaws.com/portfolio";
  return (
    <>
      {!props.isFullPortfolio ? (
        <Box sx={{ textAlign: "left" }}>
          <Typography variant="h4">{texts.t1}</Typography>
          <Typography variant="body1">{texts.t2}</Typography>
          <ImageList
            sx={{ height: 250, overflow: "hidden" }}
            cols={3}
            rowHeight={120}
          >
            {images.map((item) => (
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
      ) : (
        <Container>
          <Box id="ArtHunting">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Art Hunting</Typography>
              <br></br>
              <Typography variant="body1">
                ¿Qué es lo que te está llamando hoy? ¿Quieres crear algo
                original o quieres buscar ideas? Platícanos tu caso y te
                ayudamos a hacerlo realidad.
              </Typography>
              <br></br>
              <ImageList variant="masonry" cols={3} gap={8}>
                {artHunting.map((item, i) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${s3uri}/ArtHunting/${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.img}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      key={i}
                      title={""}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${item.img.substring(
                            0,
                            item.img.indexOf(".")
                          )}`}
                        >
                          <Link href={`${s3uri}/ArtHunting/${item.img}`} target={"_blank"}>
                            <FullscreenIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box id="Murals">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Murales</Typography>
              <br></br>
              <Typography variant="body1">
                Arte urbano para espacios públicos y privados. Buscamos el
                artista profesional ideal para tu proyecto y te ayudamos a
                hacerlo realidad.
              </Typography>
              <br></br>
              <ImageList variant="masonry" cols={3} gap={8}>
                {murals.map((item, i) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${s3uri}/Murales/${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.img}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      key={i}
                      title={""}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${item.img.substring(
                            0,
                            item.img.indexOf(".")
                          )}`}
                        >
                          <Link href={`${s3uri}/Murales/${item.img}`} target={"_blank"}>
                            <FullscreenIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box id="Production">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Producción</Typography>
              <br></br>
              <Typography variant="body1">
                Para personas o negocios: Organizamos y lanzamos eventos
                culturales y proyectos en video desde cobertura o entrevistas
                personales.
              </Typography>
              <br></br>
              <ImageList variant="masonry" cols={3} gap={8}>
                {production.map((item, i) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${s3uri}/Producción/${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.img}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      key={i}
                      title={""}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${item.img.substring(
                            0,
                            item.img.indexOf(".")
                          )}`}
                        >
                          <Link href={`${s3uri}/Producción/${item.img}`} target={"_blank"}>
                            <FullscreenIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
          <Box id="Events">
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4">Eventos</Typography>
              <br></br>
              <Typography variant="body1">
                Te presentamos un poco de los eventos que hemos organizado para
                nuestros clientes.
              </Typography>
              <br></br>
              <ImageList variant="masonry" cols={3} gap={8}>
                {events.map((item, i) => (
                  <ImageListItem key={item.img}>
                    <img
                      src={`${s3uri}/Eventos/${item.img}?w=164&h=164&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.img}
                      loading="lazy"
                    />
                    <ImageListItemBar
                      key={i}
                      title={""}
                      actionIcon={
                        <IconButton
                          aria-label={`info about ${item.img.substring(
                            0,
                            item.img.indexOf(".")
                          )}`}
                        >
                          <Link href={`${s3uri}/Eventos/${item.img}`} target={"_blank"}>
                            <FullscreenIcon />
                          </Link>
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          </Box>
        </Container>
      )}
      {!props.isFullPortfolio && (
        <Button variant="contained" href="/portfolio">
          Ver Mas
        </Button>
      )}
    </>
  );
}

export default Portfolio;
