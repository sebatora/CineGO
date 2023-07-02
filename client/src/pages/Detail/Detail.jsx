import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import ReactStars from "react-stars";
import Error404 from "../../pages/Error404/Error404";
import { cleanDetail, getMovieById, postRating } from "../../redux/actions";

function Detail() {
  const detail = useSelector((state) => state.movieById);
  const userData = JSON.parse(window.localStorage.getItem("user"));
  const [activeTrailer, setActiveTrailer] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const [rating, setRating] = useState(0);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const navigate = useNavigate();

  const handleClick = (day) => {
    if (selectedDay === day) {
      setSelectedDay(null);
    } else {
      setSelectedDay(day);
    }
  };

  const handleClickType = (type) => {
    setSelectedType(type);
  };

  const handleChangeRating = count => {
    if(rating < 0){
      dispatch(postRating({ movieId: detail.id, count }))
      setRating(count);
    }
  }

  useEffect(() => {
    dispatch(getMovieById(id));
    return () => dispatch(cleanDetail());
  }, [id, dispatch]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!userData) {
      navigate("/login");
    } else {
      const orderPurchase = {
        userId: userData.id,
        items: [
          {
            itemId: id,
            quantity: null,
            price: null,
            type: "show",
          },
        ],
        totalPrice: null,
      };
      navigate("/ticket");
      window.localStorage.setItem(
        "orderPurchase",
        JSON.stringify(orderPurchase)
      );
    }
  };

  return (
    <>
      {!detail.id ? (
        <Error404 />
      ) : ( 
        <div className="w-full flex flex-col mt-20 p-10">
          <div className="w-full flex">
            <div className="w-96 h-fit flex flex-col items-center">
              <div className="w-full relative">
                <img
                  className="w-full h-[350px]"
                  src={detail.image}
                  alt={detail.title}
                />
                <div className="absolute right-0 top-0 z-10">
                  <h3 className="bg-white rounded-bl-xl dark:text-black p-1">
                    {detail.clasification}
                  </h3>
                </div>
                <div className="w-full h-full absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-black/50">
                  <button onClick={() => setActiveTrailer(true)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      className="w-20 h-20 fill-gray-300 hover:fill-gray-400"
                    >
                      <path
                        fillRule="evenodd"
                        d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm14.024-.983a1.125 1.125 0 010 1.966l-5.603 3.113A1.125 1.125 0 019 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              <ReactStars
                className="w-full flex justify-center p-4"
                count={5}
                size={30}
                value={rating}
                onChange={handleChangeRating}
              />
              <ul className="w-full">
                <li className="p-2">
                  <h4>Género:</h4>
                  <p className="text-sm">
                    {detail.genres?.map((genre) => genre.name).join(" - ")}
                  </p>
                </li>
                <li className="p-2">
                  <h4>Director:</h4>
                  <p className="text-sm">{detail.director}</p>
                </li>
                <li className="p-2">
                  <h4>Actores:</h4>
                  <p className="text-sm">{detail.actors}</p>
                </li>
                <li className="p-2">
                  <h4>Duración:</h4>
                  <p className="text-sm">{detail.duration} min</p>
                </li>
              </ul>
            </div>

            <div className="w-full flex flex-col ml-20">
              <h2 className="w-4/5 pb-4 border-b-4 border-b-light-300 dark:border-b-dark-700">
                {detail.title}
              </h2>
              <div className="w-4/5 mb-6">
                <h3 className="my-4">Sinopsis</h3>
                <p className="text-base">{detail.description}</p>
              </div>
              <div className="w-4/5 mb-6 flex flex-col">
                <div>
                  <h3>Shows</h3>
                  <div className="flex items-center justify-between">
                    {detail.shows
                      ?.map((show) => show.date)
                      .filter(
                        (date, index, array) => array.indexOf(date) === index
                      )
                      .map((date) => (
                        <button
                          key={date}
                          onClick={() => handleClick(date)}
                          className={selectedDay === date ? "selected" : ""}
                        >
                          {date}
                        </button>
                      ))}
                  </div>
                </div>
                {selectedDay && (
                  <div>
                    <h4>Tipos:</h4>
                    <div className="flex items-center justify-between">
                      {detail.shows
                        ?.filter((show) => show.date === selectedDay)
                        .map((show) => show.type)
                        .filter(
                          (type, index, array) => array.indexOf(type) === index
                        )
                        .map((type) => (
                          <button
                            key={type}
                            onClick={() => handleClickType(type)}
                            className={selectedType === type ? "selected" : ""}
                          >
                            {type}
                          </button>
                        ))}
                    </div>
                  </div>
                )}
                {selectedType && (
                  <div>
                    <h4>Horarios:</h4>
                    {detail.shows
                      ?.filter(
                        (show) =>
                          show.date === selectedDay &&
                          show.type === selectedType
                      )
                      .map((show) => (
                        <button key={show.id}>{show.hour}</button>
                      ))}
                  </div>
                )}
              </div>

              <div className="mt-8 mb-10 flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="bg-primary-600 hover:bg-primary-500 text-white border-none px-4 py-2 text-center text-base rounded cursor-pointer"
                  type="submit"
                >
                  ¡Comprar entradas!
                </button>
              </div>
            </div>
          </div>
          {activeTrailer && (
            <div className="w-full h-screen fixed top-0 left-0 bottom-0 right-0 z-50 bg-black/90 flex justify-center items-center">
              <iframe
                className="w-3/4 h-96"
                src={detail.trailer}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
              <button
                className="absolute right-0 top-0 m-4"
                onClick={() => setActiveTrailer(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="w-12 h-12 fill-red-600"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Detail;
