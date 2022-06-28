import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import React from "react";
import { cardsContent, texts } from "../staticInfo/services";

export default function ServiceCards() {
  return (
    <React.Fragment>
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
        {cardsContent.map((card) => (
          <Grid item>
            <Card sx={{ maxWidth: 300 }}>
              <CardMedia
                component="img"
                alt="services"
                height="140"
                image={require(`./assets/service-img-1.png`)}
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
                <Button size="small" variant="contained">
                  {card.button1Title}
                </Button>
                <Button size="small" variant="contained">
                  {card.button2Title}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
