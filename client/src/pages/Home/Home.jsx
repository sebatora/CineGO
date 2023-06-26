import React from "react";
import Carousel from "../../components/Carousel/Carousel";
import img1 from "../../assets/carousel_1.png";
import img2 from "../../assets/carousel_2.png";
import img3 from "../../assets/carousel_3.png";
import img4 from "../../assets/carousel_4.png";
import MoviesContainer from "../../components/MoviesContainer/MoviesContainer";
import { Toaster } from "react-hot-toast";

function Home() {
  const images = [img1, img2, img3, img4];
  return (
    <div className="w-full mt-12 flex flex-col items-center">
      <Toaster />
      <Carousel images={images} />
      <MoviesContainer />
    </div>
  );
}

export default Home;
