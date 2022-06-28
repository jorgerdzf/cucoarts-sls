import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
} from "@mui/material";
import React from "react";
import { texts, images } from "../staticInfo/portfolio";

function Portfolio() {
  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t1}</Typography>
        <Typography variant="body1">{texts.t2}</Typography>
        <ImageList sx={{ height: 350 }} cols={3} rowHeight={164}>
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
      <Button variant="contained">Ver Mas</Button>
    </>
  );
}

export default Portfolio;
