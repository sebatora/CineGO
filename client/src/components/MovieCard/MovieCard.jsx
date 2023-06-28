import React, { useState } from "react";
import { Link } from "react-router-dom";

function MovieCard({ id, title, image, clasification, duration }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-52 h-72 mx-4 my-8 rounded-sm animate-fade-down animate-once animate-delay-1000">
      <div
        className={`w-full h-full relative group transition duration-500 ease-linear 
          ${isHovered ? "transform hover:scale-105 shadow-lg hover:shadow-light-600 dark:hover:shadow-lg dark:hover:shadow-red-600" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="w-full h-full" to={`/detail/${id}`}>
          <img
            className="w-full h-full absolute"
            src={image}
            alt={title}
            style={{ filter: isHovered ? "blur(2px)" : "none" }}
          />
          <div
            className={`w-full h-full p-2 absolute bottom-0 flex flex-col justify-center items-center text-center bg-black bg-opacity-80 transition-opacity duration-500 ease-linear 
              ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <h4 className="text-white text-sm">{title}</h4>
            <div className="text-white mt-4">
              <p className="text-white text-xs">Duración: {duration} min.</p>
            </div>
            <div className="text-white">
              <p className="text-white text-xs">Clasificación: {clasification}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;



