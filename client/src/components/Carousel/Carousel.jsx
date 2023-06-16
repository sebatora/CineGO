import React, { useState, useEffect } from "react";
import style from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images]);

  const handleIndexClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className="Carousel">
      <div className="w-11/12 h-11/12 rounded-md">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute top-0 left-0 opac w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-2 flex justify-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexClick(index)}
            className={`w-6 h-6 rounded-full bg-white border-none m-0 5px cursor-pointer opacity-60 transition-all duration-300 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
