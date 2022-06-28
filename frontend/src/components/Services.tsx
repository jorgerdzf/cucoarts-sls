import { Box, Typography } from '@mui/material';
import React from 'react'
import { texts } from "../staticInfo/services";
import WebhookIcon from '@mui/icons-material/Webhook';
import BrushIcon from '@mui/icons-material/Brush';
import TheatersIcon from '@mui/icons-material/Theaters';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import Portfolio from '../shared/Portfolio';
import EstimateCost from '../shared/EstimateCost';
import Footer from '../shared/Footer';
import Header from '../shared/Header';

function Services() {
  return (
    <>
      <Header isMainPage={false}/>
      <Typography variant="h4">{texts.t1}</Typography>
      <Typography variant="body1">{texts.t3}</Typography>
      <Box>
        <WebhookIcon></WebhookIcon>
        <Typography variant="h4">{texts.t4}</Typography>
        <br></br>
        <Typography variant="h5">{texts.t5}</Typography>
        <Typography variant="body2">{texts.t6}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t7}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t8}</Typography><BookmarksIcon/>
      </Box>
      <Box>
        <BrushIcon></BrushIcon>
        <Typography variant="h4">{texts.t9}</Typography>
        <br></br>
        <Typography variant="h5">{texts.t10}</Typography>
        <Typography variant="body2">{texts.t6}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t7}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t8}</Typography><BookmarksIcon/>
      </Box>
      <Box>
        <TheatersIcon></TheatersIcon>
        <Typography variant="h4">{texts.t11}</Typography>
        <br></br>
        <Typography variant="h5">{texts.t12}</Typography>
        <Typography variant="body2">{texts.t6}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t7}</Typography><BookmarksIcon/>
        <Typography variant="body2">{texts.t8}</Typography><BookmarksIcon/>
      </Box>
      <Portfolio/>
      <EstimateCost/>
      <Footer/>
    </>
  )
};

export default Services;