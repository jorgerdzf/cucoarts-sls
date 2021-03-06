import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
  Box
} from "@mui/material";
import React from "react";
import { cardsContent, texts } from "../staticInfo/services";

export default function ServiceCards() {
  return (
    <>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t1}</Typography>
        <Typography variant="body1">{texts.t2}</Typography>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="top"
          spacing={2}
          padding={2}
        >
          {cardsContent.map((card, i) => (
            <Grid item key={i}>
              <Card sx={{ maxWidth: 400 }}>
                <CardMedia
                  component="img"
                  alt="services"
                  height="400"
                  image={card.imageUrl}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.text}
                  </Typography>
                </CardContent>
                <CardActions sx={{ justifyContent: "center", p: 1, m: 1 }}>
                  <Button size="small" variant="contained" href={card.button1Url}
                  sx={{m:1}} target='_blank'>
                    {card.button1Title}
                  </Button>
                  <Button size="small" variant="contained" href={card.button2Url}>
                    {card.button2Title}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </>
  );
}
