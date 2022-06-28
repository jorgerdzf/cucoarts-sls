import { Container } from "@mui/material";
import React from "react";
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import Portfolio from "../shared/Portfolio";

function FullPortfolio() {
  return (
    <>
      <Header isMainPage={false}></Header>
      <Container sx={{ pt: 12, pb: 12 }}>
        <Portfolio></Portfolio>
      </Container>
      <Footer isMainPage={false}></Footer>
    </>
  );
}

export default FullPortfolio;
