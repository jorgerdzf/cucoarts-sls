import { Typography, Box } from '@mui/material';
import React from 'react'
import ContactForm from '../shared/ContactForm';
import Footer from '../shared/Footer';
import Header from '../shared/Header';
import { texts } from '../staticInfo/contact';

function Contact() {
  return (
    <>
    <Header isMainPage={false}/>
    <Typography variant="h4">{texts.t3}</Typography>
    <Typography variant="body1">{texts.t4}</Typography>
    <Box>
      <ContactForm/>
    </Box>
    <Footer/>
  </>
  )
}

export default Contact;