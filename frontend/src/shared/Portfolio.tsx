import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Container,
} from "@mui/material";
import React from "react";
import { texts, images } from "../staticInfo/portfolio";

interface PortfolioProps {
  isFullPortfolio: boolean;
}

function Portfolio(props: PortfolioProps) {
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
          </Box>
          <Box id="Murals">
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
          </Box>
          <Box id="Production">
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
