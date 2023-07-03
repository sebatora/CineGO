import React, { useState } from "react";
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco_logo.png";
import cinego_negro from "../../assets/cinego_negro_logo.png";

function MovieCard({ id, title, image, clasification, duration }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-52 h-72 mx-4 my-8">
      <div
        className={`w-full h-full relative group transition duration-500 ease-in 
    ${
      isHovered
        ? "shadow-xl hover:shadow-light-600 dark:hover:shadow-xl dark:hover:shadow-red-600"
        : ""
    }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <Link className="w-full h-full" to={`/detail/${id}`}>
          <img
            className="w-full h-full absolute rounded-sm border border-solid border-black dark:border-solid dark:border-red-600"
            src={image}
            alt={title}
            style={{ filter: isHovered ? "blur(2px) " : "none" }}
          />
          <div
            className={`w-full h-full p-2 absolute bottom-0 overflow-hidden flex flex-col justify-center items-center text-center bg-black bg-opacity-80 transition-opacity duration-500 ease-linear ${
              isHovered
                ? "animate-cardMovieAnimate rounded-sm border border-solid border-black dark:border-solid dark:border-red-600"
                : "opacity-0"
            }`}
          >
            <img
              src={cinego_blanco}
              alt={title}
              className="w-[100px] h-[100px] fill-yellow-400"
            />
            <div className="h-full py-4 flex flex-col justify-around">
              <h4 className="text-white text-sm">{title}</h4>
              <div className="font-bold">
                <div className="text-white m-1">
                  <p className="text-white text-xs">
                    Duración: {duration} min.
                  </p>
                </div>
                <div className="text-white m-1">
                  <p className="text-white text-xs">
                    Clasificación: {clasification}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
