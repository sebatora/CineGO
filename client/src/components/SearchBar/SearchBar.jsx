import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from "../../redux/actions"

const SearchBar = () =>{
  const dispatch = useDispatch()
  const [ name, setName ] = useState('')
  
  const handleChange = (event) =>{
    const { value } = event.target;
    setName(value);
  }
  
  useEffect(()=>{
    dispatch(getMoviesByName(name));
  }, [dispatch, name]);

  return (
    <div className="w-full">
      <div className="relative">
        <input
          className="w-full appearance-none bg-transparent rounded-2xl border-2 border-black dark:border-white focus:outline-none focus:border-black py-1 px-2 pl-3"
          type="search"
          name="search"
          onChange={handleChange}
          placeholder="Buscar películas"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-6 h-6 stroke-black dark:stroke-white">
            <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 100 13.5 6.75 6.75 0 000-13.5zM2.25 10.5a8.25 8.25 0 1114.59 5.28l4.69 4.69a.75.75 0 11-1.06 1.06l-4.69-4.69A8.25 8.25 0 012.25 10.5z" clip-rule="evenodd" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;