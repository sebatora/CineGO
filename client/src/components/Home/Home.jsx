import React from "react";
import Carousel from "../Carousel/Carousel";
import img1 from "../../assets/carousel_1.webp";
import img2 from "../../assets/carousel_2.webp";
import img3 from "../../assets/carousel_3.webp";
import MoviesContainer from "../MoviesContainer/MoviesContainer";
import { Toaster } from "react-hot-toast";

function Home() {
  const images = [
    img1,
    img2,
    img3,
    // Agrega más imágenes aquí
  ];
  return (
    <div className="w-full mt-28 flex flex-col items-center">
      <Toaster />
      <Carousel images={images} />
      <MoviesContainer />
    </div>
  );
}

export default Home;
