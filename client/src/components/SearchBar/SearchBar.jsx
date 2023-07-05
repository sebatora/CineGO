import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from "../../redux/actions";

const SearchBar = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const handleChange = (event) => {
    const { value } = event.target;
    setName(value);
  };

  useEffect(() => {
    dispatch(getMoviesByName(name));
  }, [dispatch, name]);

  return (
    <div className="lg:w-2/3 relative flex items-center mx-6 mb-4 lg:mb-0 md:mx-20 lg:mx-12">
      <div className="absolute right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          className="w-6 h-6 stroke-black dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
      </div>

      <input
        className="w-full bg-transparent border border-light-500 rounded-xl py-2 px-3 placeholder:text-black dark:placeholder:text-white"
        type="search"
        name="search"
        onChange={handleChange}
        placeholder="Buscar película"
      />
    </div>
  );
};

export default SearchBar;
