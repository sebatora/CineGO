import {
  GET_MOVIES,
  GET_MOVIE_BY_ID,
  GET_MOVIES_BY_TITLE,
  CLEAN_DETAIL,
  GET_GENRES,
  POST_MOVIE,
  DELETE_MOVIE,
  FILTER_ORDER,
  POST_USER,
  LOGIN_USER,
  LOGOUT_USER,
} from "./action-type";

import axios from "axios";

// Trae todas las peliculas
export const getMovies = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies`);
      return dispatch({ type: GET_MOVIES, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Trae las peliculas por ID
export const getMovieById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies/${id}`);
      return dispatch({ type: GET_MOVIE_BY_ID, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Trae las peliculas por nombre
export const getMoviesByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/movies?title=${name}`);
      return dispatch({ type: GET_MOVIES_BY_TITLE, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Limpia el estado del detail
export const cleanDetail = () => {
  return { type: CLEAN_DETAIL };
};

// Trae los generos
export const getGenres = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/genres`);
      return dispatch({ type: GET_GENRES, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Crea una nueva pelicula
export const postMovie = (newMovie) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/movies`, newMovie);
      return dispatch({ type: POST_MOVIE, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Elimina una pelicula
export const deleteMovie = (id) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/movies/${id}`);
    return dispatch({ type: DELETE_MOVIE, payload: data });
  };
};

// Filtra y ordena
export const filterOrder = (info) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/order`, info);
    return dispatch({ type: FILTER_ORDER, payload: data });
  };
};

// Crea un nuevo usuario
export const postUser = (newUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/users`, newUser);
      return dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Valida el login del usuario
export const loginUser = (user) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/users/login`, user);
      return dispatch({ type: LOGIN_USER, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// limpia userData

export const logoutUser = () => {
  return { type: LOGOUT_USER };
};
