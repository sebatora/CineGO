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
  PUT_USER,
  LOGIN_USER,
  LOGOUT_USER,
  GET_CANDY,
  ADD_TO_CART,
  REMOVE_ONE_CART,
  REMOVE_ALL_CART,
  ADD_TO_CART_CANDY,
  REMOVE_ALL_CART_CANDY,
  REMOVE_ONE_CANDY,
  SAVE_CART,
  PUT_SUBSCRIPTION,
  DELETE_SUBSCRIPTION,
  FORGOT_PASSWORD_USER,
  POST_PURCHASES,
  GET_USER_BY_ID,
  POST_ALL_TICKETS,
  POST_CANDY,
  DELETE_CANDY,
  PUT_CANDY,
  GET_USERS,
  PUT_MOVIE,
  POST_RATING,
  GET_PURCHASES,
  GET_CANDY_BY_NAME,
  GET_METRICS,

  // ERROR
} from "./action-type";

import axios from "axios";
import { toast } from "react-hot-toast";
import Swal from "sweetalert2";

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
      window.localStorage.setItem("movie", JSON.stringify(data));
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

// Edita una pelicula
export const putMovie = (idMovie, dataMovie) => {
  return async (dispatch) => {
    const { data } = await axios.put(`/movies/${idMovie}`, dataMovie);
    return dispatch({ type: PUT_MOVIE, payload: data });
  };
};

// Filtra y ordena
export const filterOrder = (info) => {
  return async (dispatch) => {
    const { data } = await axios.post(`/order`, info);
    return dispatch({ type: FILTER_ORDER, payload: data });
  };
};

// Trae los usuarios
export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users`);
      return dispatch({ type: GET_USERS, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Busca un usuario
export const getUserById = (userId) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/users/${userId}`);
      window.localStorage.setItem("user", JSON.stringify(data));
      return dispatch({ type: GET_USER_BY_ID, payload: data });
    } catch (error) {
      return error.message;
    }
  };
}

// Crea un nuevo usuario
export const postUser = (newUser) => {
  return async (dispatch) => {
    try {
      // Verificar si el correo electrónico ya está registrado
      // const response = await axios.get(`/users?email=${newUser.email}`);
      // const existingUser = response.data;

      // if (existingUser.length === 0) {
      //   throw new Error("El correo electrónico ya está registrado.");
      // }

      const { data } = await axios.post(`/users`, newUser);
      Swal.fire({
        html: `<strong>${data}</strong> `,
        icon: "success",
      });

      return dispatch({ type: POST_USER, payload: data });
    } catch (error) {
      if (error.response.status === 404) {
        let errorData = error.response.data.error;
        Swal.fire({
          html: `<strong>${errorData}</strong> `,
          icon: "error",
        });

        //  return dispatch({type:ERROR, payload: errorData})
      }
    }
  };
};

// Modifica a un usuario
export const putUser = (dataUser) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/users`, dataUser);
      return dispatch({ type: PUT_USER, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Envia la contraseña olvidada de un usuario
export const forgotPassUser = (userData) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/reset`, userData);
      return dispatch({ type: FORGOT_PASSWORD_USER, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Modificar la suscripcion del usuario
export const putUserSubscription = (user) => {
  return async (dispatch) => {
    try {
      const { data } = axios.put(`/subscription`, user);
      return dispatch({ type: PUT_SUBSCRIPTION, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Eliminar la suscripción del usuario
export const deleteUserSubscription = (id) => {
  return async (dispatch) => {
    try {
      const { data } = axios.delete(`/subscription`, id);
      return dispatch({ type: DELETE_SUBSCRIPTION, payload: data });
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
      toast.error("Los datos ingresados son incorrectos")
    }
  };
};

// limpia userData
export const logoutUser = () => {
  return { type: LOGOUT_USER };
};

export const postAllTickets = (tickets) => {
  return {
    type: POST_ALL_TICKETS,
    payload: tickets,
  };
};

export const addCart = (name) => {
  return {
    type: ADD_TO_CART,
    payload: name,
  };
};

export const removeAllCart = (name) => {
  return {
    type: REMOVE_ALL_CART,
    payload: name,
  };
};

export const removeOneCart = (name) => {
  return {
    type: REMOVE_ONE_CART,
    payload: name,
  };
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
  };
};

// Trae los candy por nombre
export const getCandyByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/candy?name=${name}`);
      return dispatch({ type: GET_CANDY_BY_NAME, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

//Crea un producto en candy
export const postCandy = (newCandy) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/candy`, newCandy);
      return dispatch({ type: POST_CANDY, payload: data });
    } catch (error) {
      return error.message;
    }
  }
}

//Elimina un producto de candy
export const deleteCandy = (name) => {
  return async (dispatch) => {
    const { data } = await axios.delete(`/candy`, name);
    return dispatch({ type: DELETE_CANDY, payload: data });
  }
}

//Modificar un producto de candy
export const putCandy = (idCandy, dataCandy) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.put(`/candy/${idCandy}`, dataCandy);
      return dispatch({ type: PUT_CANDY, payload: data });
    } catch (error) {
      return error.message;
    }
  }
}

export const addCartCandy = (name) => {
  return {
    type: ADD_TO_CART_CANDY,
    payload: name,
  };
};

export const removeAllCartCandy = (name) => {
  return {
    type: REMOVE_ALL_CART_CANDY,
    payload: name,
  };
};

export const removeOneCartCandy = (name) => {
  return {
    type: REMOVE_ONE_CANDY,
    payload: name,
  };
};

export const saveCart = (cart) => {
  return {
    type: SAVE_CART,
    payload: cart,
  };
};

//METRICAS
export const getMetrics = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/metrics`);
      return dispatch({ type: GET_METRICS, payload: data})
    } catch (error) {
      return error.message;
    }
  }
}

// PURCHASE
export const getPurchases = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/purchase`);
      return dispatch({ type: GET_PURCHASES, payload: data})
    } catch (error) {
      return error.message;
    }
  }
}

export const postPurchases = (purchase) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/purchase`, purchase);
      return dispatch({ type: POST_PURCHASES, payload: data });
    } catch (error) {
      return error.message;
    }
  };
};

// Rating
export const postRating = (rating) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.post(`/rating`, rating);
      return dispatch({ type: POST_RATING, payload: data });
    } catch (error) {
      return error.message;
    }
  };
}