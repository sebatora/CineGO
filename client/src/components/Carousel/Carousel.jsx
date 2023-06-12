import React, { useState, useEffect } from 'react';

const Carousel = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      // Avanzar al siguiente índice de imagen
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 2000);

    return () => {
      // Limpiar el intervalo cuando el componente se desmonta
      clearInterval(interval);
    };
  }, [images]);

  return (
    <div className="carousel">
      <img src={images[currentImageIndex]} alt="Carousel Image" />
    </div>
  );
};

export default Carousel;