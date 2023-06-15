
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.module.css";

import { getMoviesByName } from "../../redux/actions"


const SearchBar = () =>{
    
    const dispatch = useDispatch()
    const [ name, setName ] = useState('')
    
    const handleChange = (event) =>{
        const { value } = event.target;
        setName(value)
    }
    
    useEffect(()=>{
        dispatch(getMoviesByName(name))
    }, [dispatch, name])

    return (
        <div className={styles.container}>
            <label htmlFor="seach"></label>
            <input type="seach" name="seach" onChange={handleChange} placeholder="Buscar peliculas"/>
        </div>
    )
}

export default SearchBar;