import { Link } from "react-router-dom";

function MovieCard({ id, title, image, clasification }) {
  return (
    <div className="w-52 h-72 mx-4 my-8 rounded-sm hover:shadow-lg hover:shadow-black dark:hover:shadow-lg dark:hover:shadow-red-600 animate-fade-down animate-once animate-delay-1000">
      <div className="w-full h-full relative group transition-transform duration-500 ease-linear hover:scale-105">
        <Link className="w-full h-full" to={`/detail/${id}`}>
          <img className="w-full h-full absolute" src={image} />
          <div className="absolute right-0">
            <h3 className="bg-white rounded-bl-xl dark:text-black p-1">{clasification}</h3>
          </div>
          <div className="w-full h-32 p-2 absolute bottom-0 flex flex-col justify-between text-center opacity-0 group-hover:opacity-100 group-hover:bg-black/80">
            <h4 className="text-white">{title}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default MovieCard;
