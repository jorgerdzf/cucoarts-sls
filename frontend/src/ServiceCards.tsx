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

interface CardProps {
  cards: ReadonlyArray<{
    title: string;
    text: string;
    imageUrl: string;
    button1Title: string;
    button1Url: string;
    button2Title: string;
    button2Url: string;
  }>;
}

export default function ServiceCards(props: CardProps) {
  const { cards } = props;
  return (
    <React.Fragment>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="top"
        spacing={2}
      >
        {cards.map((card) => (
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
              <CardActions>
                <Button size="small">{card.button1Title}</Button>
                <br/>
                <Button size="small">{card.button2Title}</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
}
