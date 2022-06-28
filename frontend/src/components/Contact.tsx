import { Typography, Box, Container } from "@mui/material";
import React from "react";
import ContactForm from "../shared/ContactForm";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import { texts } from "../staticInfo/contact";

function Contact() {
  return (
    <>
      <Header isMainPage={false} />
      <Box sx={{ pt: 2, pb: 8 }}>
        <Box sx={{ pt: 8, pb: 8 }}>
          <Typography variant="h4">{texts.t3}</Typography>
          <Typography variant="body1">{texts.t4}</Typography>
        </Box>
        <Container>
          <ContactForm />
        </Container>
      </Box>
      <Footer isMainPage={false} />
    </>
  );
}

export default Contact;
