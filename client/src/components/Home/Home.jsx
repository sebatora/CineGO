import React from "react";
import Carousel from "../Carousel/Carousel";
import img1 from "../../assets/cinego_blanco.png";
import img2 from "../../assets/cinego_negro.png";
import img3 from "../../assets/cineLogo.png";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

function Home() {
  const images = [
    img1,
    img2,
    img3,
    // Agrega más imágenes aquí
  ];
  return (
    <div>
      <Carousel images={images} />
      <MoviesContainer/>
    </div>
  );
}

export default Home;
