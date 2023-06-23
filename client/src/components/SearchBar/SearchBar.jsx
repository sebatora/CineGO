import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getMoviesByName } from "../../redux/actions"

const SearchBar = () =>{
  const dispatch = useDispatch()
  const [ name, setName ] = useState('');
  const [activeSearch, setActiveSearch] = useState(false)
  
  const handleChange = (event) =>{
    const { value } = event.target;
    setName(value);
  }
  
  useEffect(()=>{
    dispatch(getMoviesByName(name));
  }, [dispatch, name]);

  return (
    <div className="w-3/4 flex justify-end">
      {activeSearch && (
        <input
        className="w-3/4 appearance-none bg-transparent rounded-2xl border-2 border-black dark:border-white dark:text-white focus:outline-none focus:border-black py-1 px-2"
        type="search"
        name="search"
        onChange={handleChange}
        placeholder="Buscar películas"
      />
      )}
      <button onClick={() => setActiveSearch(!activeSearch)}>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" class="w-8 h-8 stroke-black dark:stroke-white">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
      </button>
    </div>
  )
}

export default SearchBar;