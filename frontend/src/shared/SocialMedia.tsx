import {
  Box, Typography,
} from "@mui/material";
import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { texts } from "../staticInfo/socialMedia";

export default function SocialMedia() {
  return (
    <React.Fragment>
      <Box sx={{ textAlign: "left" }}>
        <Typography variant="h4">{texts.t1}</Typography>
        <Typography variant="body1">{texts.t2}</Typography>
        </Box>
      <Box component="form" sx={{mt:6}}>
        <FacebookIcon sx={{fontSize: 100}}/>
        <InstagramIcon sx={{fontSize: 100}}/>
        <RedditIcon sx={{fontSize: 100}}/>
        <LinkedInIcon sx={{fontSize: 100}}/>
        <TwitterIcon sx={{fontSize: 100}}/>
        <MusicNoteIcon sx={{fontSize: 100}}/>
        <YouTubeIcon sx={{fontSize: 100}}/>
        <WhatsAppIcon sx={{fontSize: 100}}/>
      </Box>
    </React.Fragment>
  );
}
