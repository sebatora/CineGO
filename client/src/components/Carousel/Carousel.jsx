import React, { useState, useEffect } from "react";
import style from "./Carousel.module.css";

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  const handleIndexClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div className={style.carouselContainer}>
      <div className={style.containerInfo}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`${style.carouselImage} ${
              index === currentImageIndex ? style.active : ""
            }`}
          />
        ))}
      </div>
      <div className={style.indexButtons}>
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexClick(index)}
            className={`${style.indexButton} ${
              index === currentImageIndex ? style.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
