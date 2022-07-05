import { Box, Typography } from "@mui/material";
import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloudIcon from '@mui/icons-material/Cloud';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { texts } from "../staticInfo/socialMedia";
import Link from "@mui/material/Link";

export default function SocialMedia() {
  return (
    <React.Fragment>
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4">{texts.t1}</Typography>
        <Typography variant="body1">{texts.t2}</Typography>
      </Box>
      <Box component="form" sx={{ mt: 6 }}>
        <Link href="https://www.facebook.com/cucoarts" target="_blank">
          <FacebookIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://www.instagram.com/cucoarts/" target="_blank">
          <InstagramIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://www.reddit.com/user/cucoarts" target="_blank">
          <RedditIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://www.linkedin.com/company/cucoarts/" target="_blank">
          <LinkedInIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://twitter.com/cucoarts" target="_blank">
          <TwitterIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://www.tiktok.com/@cucoarts.mx" target="_blank">
          <MusicNoteIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://www.youtube.com/c/cucoarts" target="_blank">
          <YouTubeIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://soundcloud.com/cucoarts" target="_blank">
          <CloudIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://open.spotify.com/show/6BLIwsjTJ0Trd0ANcU4p2P?si=186485fd1de948f6" target="_blank">
          <PodcastsIcon sx={{ fontSize: 100 }} />
        </Link>
        <Link href="https://wa.me/+528120321492" target="_blank">
          <WhatsAppIcon sx={{ fontSize: 100 }} />
        </Link>
      </Box>
    </React.Fragment>
  );
}
