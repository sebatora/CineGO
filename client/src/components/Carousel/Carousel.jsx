import React, { useState, useEffect } from "react";

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
    <div className="w-full px-4 md:w-3/4 h-[250px] md:h-[420px] relative overflow-hidden flex flex-col items-center mt-2">
      <div className="w-full h-full">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-full h-full opacity-0 transition-opacity duration-500 ease-in-out ${
              index === currentImageIndex ? "opacity-100" : ""
            }`}
          />
        ))}
      </div>
      <div className="absolute bottom-2 flex justify-center items-center space-x-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndexClick(index)}
            className={`w-3 h-3 rounded-full bg-white border-none m-0 cursor-pointer transition-all duration-300 ease-in-out ${
              index === currentImageIndex ? "p-2 bg-gray-400" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
