import React from "react";
import Header from "../components/header/header";
import Carousel from "../components/carousel/carousel";
import Title from "../components/specs/title";
import Specs from "../components/specs/specs";
import Footer from "../components/footer/footer"

const Logement = () => {
  return (
    <div>
      <Header />
      <Carousel></Carousel>
      <Title></Title>
      <Specs></Specs>
      <Footer></Footer>
     
    </div>
  );
};

export default Logement;
