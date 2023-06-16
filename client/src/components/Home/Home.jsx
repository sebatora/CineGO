import React from "react";
import Carousel from "../Carousel/Carousel";
import img1 from "../../assets/carousel_1.webp";
import img2 from "../../assets/carousel_2.webp";
import img3 from "../../assets/carousel_3.webp";
import MoviesContainer from "../MoviesContainer/MoviesContainer";

function Home() {
  const images = [
    img1,
    img2,
    img3,
    // Agrega más imágenes aquí
  ];
  return (
    <div className="Home">
      <Carousel images={images} />
      <MoviesContainer/>
    </div>
  );
}

export default Home;
