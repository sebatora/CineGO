import { GET_MOVIES, GET_MOVIE_BY_ID, GET_MOVIES_BY_TITLE, CLEAN_DETAIL, GET_GENRES, POST_MOVIE, DELETE_MOVIE, FILTER_GENRE, FILTER_CLASIFICATION, ORDER_ALPHABETIC, ORDER_DATE } from "./action-type";

import axios from "axios";

// Trae todas las peliculas
export const getMovies = () => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies`)
      return dispatch({ type: GET_MOVIES, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Trae las peliculas por ID
export const getMovieById = (id) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies/${id}`)
      return dispatch({ type: GET_MOVIE_BY_ID, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Trae las peliculas por nombre
export const getMoviesByName = (name) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies?title=${name}`)
      return dispatch({ type: GET_MOVIES_BY_TITLE, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Limpia el estado del detail
export const cleanDetail = () => {  
  return {type: CLEAN_DETAIL}
};

// Trae los generos
export const getGenres = () => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/genres`)
      return dispatch({ type: GET_GENRES, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Crea una nueva pelicula
export const postMovie = (newMovie) => {  
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/movies`, newMovie)
      return dispatch({ type: POST_MOVIE, payload: data });
    }
    catch (error) {
      return error.message;
    }
  };
};

// Elimina una pelicula
export const deleteMovie = (id) => {  
  return async (dispatch) => {
      const { data } = await axios.delete(`/movies/${id}`)
      return dispatch({ type: DELETE_MOVIE, payload: data });
  };
};

// Filtra por genero
export const filterGenre = (temp) => {
  return { type: FILTER_GENRE, payload: temp };
};

// Filtra por clasificacion
export const filterClasification = (origin) => {
  return { type: FILTER_CLASIFICATION, payload: origin };
};

// Ordena alfabeticamente
export const orderAlphabetic = (order) => {
  return { type: ORDER_ALPHABETIC, payload: order };
};

// Ordena por fecha de lanzamiento
export const orderDate = (order) => {
  return { type: ORDER_DATE, payload: order };
};