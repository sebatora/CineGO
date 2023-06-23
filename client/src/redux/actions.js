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
  GET_CANDY,
  ADD_TO_CART,
  REMOVE_ONE_CART,
  REMOVE_ALL_CART,
  ADD_TO_CART_CANDY,
  REMOVE_ALL_CART_CANDY,
  REMOVE_ONE_CANDY,
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
      window.localStorage.setItem("user", JSON.stringify(data));
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


//Trae todos los productos candy
export const getCandy = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/candy`);
      return dispatch({ type: GET_CANDY, payload: data });
    } catch (error) {
      return error.message;
    }
  }
}


export const addCart = (id) =>{
  return{
    type: ADD_TO_CART,
    payload: id
  }
}


export const removeAllCart = (id) =>{
  return{
    type: REMOVE_ALL_CART,
    payload: id
  }
}
export const removeOneCart = (id) =>{
  return{
    type: REMOVE_ONE_CART,
    payload:id
  }
}
export const addCartCandy = (name) =>{
  return{
    type: ADD_TO_CART_CANDY,
    payload: name
  }
}


export const removeAllCartCandy = (name) =>{
  return{
    type: REMOVE_ALL_CART_CANDY,
    payload: name
  }
}
export const removeOneCartCandy = (name) =>{
  return{
    type: REMOVE_ONE_CANDY,
    payload:name
  }
}