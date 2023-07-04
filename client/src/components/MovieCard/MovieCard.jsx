import React, { useState } from "react";
import { Link } from "react-router-dom";
import cinego_blanco from "../../assets/cinego_blanco_logo.png";
import ReactStars from "react-stars";

function MovieCard({ id, title, image, clasification, duration, ratings }) {
  const [isHovered, setIsHovered] = useState(false);
  const countRating = ratings?.map((rating) => rating.count);
  const sum = countRating?.reduce(
    (accumulator, currentValue) => Number(accumulator) + Number(currentValue),
    0
  );
  const average = sum / countRating?.length;

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div className="w-52 h-72 m-4">
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
            className="w-full h-full absolute rounded-sm"
            src={image}
            alt={title}
            style={{ filter: isHovered ? "blur(2px) " : "none" }}
          />
          <div
            className={`w-full h-full p-2 absolute bottom-0 overflow-hidden flex flex-col justify-center items-center text-center bg-black bg-opacity-80 transition-opacity duration-500 ease-linear ${
              isHovered
                ? "animate-cardMovieAnimateHover"
                : "animate-cardMovieAnimateNoHover opacity-0"
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
                <ReactStars
                  className="w-full flex justify-center"
                  value={average}
                  size={20}
                  edit={false}
                />
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
