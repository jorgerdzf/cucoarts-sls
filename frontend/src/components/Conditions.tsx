import { Container, Box, Typography } from '@mui/material';
import React from 'react'
import Footer from '../shared/Footer';
import Header from '../shared/Header';

function Conditions() {
  return (
    <>
    <Header isMainPage={false}></Header>
      <Container>
        <Box sx={{ textAlign: "justify", pt: 4, pb: 4 }}>
        <Typography variant="h4">TERMINOS Y CONDICIONES DEL SERVICIO</Typography>
          <Typography variant="body1">
            FECHA DE ALTA EN SITIO WEB 01 DE JUNIO 2022
          </Typography>
          <p>
            condiciones...
          </p>
        </Box>
      </Container>
    <div>Conditions</div>
    <Footer isMainPage={false}></Footer>
    </>
  )
}

export default Conditions;