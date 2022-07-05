import {
  Box,
  Typography,
  ImageList,
  ImageListItem,
  Button,
  Link,
  IconButton,
  ImageListItemBar,
} from "@mui/material";
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import React from "react";
import { texts, images, fullGalery } from "../staticInfo/galery";

interface GaleryProps {
  isFullGalery: boolean
}
const s3uri = 'https://cucoarts-image-assets.s3.us-east-2.amazonaws.com/galery/';

const imagesToPresent = (isFullGalery: boolean) => {
  if(isFullGalery){
    return (
      <ImageList cols={5} rowHeight={240}>
          {fullGalery.map((item, i) => (
            <ImageListItem key={i} sx={{p:1}}>
              <img
                src={`${s3uri}${item.img}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${s3uri}${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={item.img}
                loading="lazy"
              />
              <ImageListItemBar
                key={i}
                title={''}
                subtitle={item.img.substring(0,item.img.indexOf('.')-1)}
                actionIcon={
                  <IconButton
                    aria-label={`info about ${item.img.substring(0,item.img.indexOf('.'))}`}
                  >
                    <Link href={s3uri+item.img} target={'_blank'}>
                      <FullscreenIcon />
                    </Link>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))}
        </ImageList>
    )
  } else {
    return (
      <ImageList sx={{ height: 240, overflow:'hidden' }} cols={3} rowHeight={120}>
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
    );
  }
}
function Galery(props: GaleryProps) {
  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t1}</Typography>
        <Typography variant="body1">{texts.t2}</Typography>
        {imagesToPresent(props.isFullGalery)}
      </Box>
      {!props.isFullGalery && <Button variant="contained" href="/galery">Ver Mas </Button>}
    </>
  );
}

export default Galery;
