import { Container } from "@mui/system";
import React from "react";
import Footer from "../shared/Footer";
import Galery from "../shared/Galery";
import Header from "../shared/Header";

function FullGalery() {
  return (
    <>
      <Header isMainPage={false}></Header>
      <Container sx={{ pt: 12, pb: 12 }}>
        <Galery></Galery>
      </Container>
      <Footer isMainPage={false}></Footer>
    </>
  );
}

export default FullGalery;
