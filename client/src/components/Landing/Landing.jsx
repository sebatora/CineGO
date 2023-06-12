import React from "react";
import Carousel from "../Carousel/Carousel";
import img1 from "../../assets/cinego_blanco.png";
import img2 from "../../assets/cinego_negro.png";
import img3 from "../../assets/cineLogo.png";

function Landing() {
  const images = [
    img1,
    img2,
    img3,
    // Agrega más imágenes aquí
  ];
  return (
    <div>
      SOY EL LANDING
      <Carousel images={images} />
    </div>
  );
}

export default Landing;
