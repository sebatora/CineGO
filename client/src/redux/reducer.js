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
  POST_PURCHASE_ORDER,
  // ERROR
} from "./action-type";

const initialState = {
  allMovies: [],
  allMoviesCopy: [],
  movieById: {},
  movieByIdCopy: {},
  allGenres: [],
  userData: {},
  allCandy: [],
  cart: [],
  productTicket: [
    {
      id: 1,
      name: "Entrada General",
      image:
        "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1687.png",
      price: 200,
      description:
        "Entrada Promocional No acumulable con otras promociones. Lunes y martes.",
    },
    {
      id: 2,
      name: "Entrada CineFan",
      image:
        "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1667.png",
      price: 290,
      description: "Incluye 2 entradas + Tarjeta Virtual.",
    },
  ],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_MOVIES: {
      return {
        ...state,
        allMovies: payload,
        allMoviesCopy: payload,
      };
    }

    case GET_MOVIE_BY_ID: {
      return {
        ...state,
        movieByIdCopy: payload,
        movieById: payload,
      };
    }

    case GET_MOVIES_BY_TITLE: {
      return {
        ...state,
        allMovies: payload,
      };
    }

    case CLEAN_DETAIL: {
      return {
        ...state,
        movieById: {},
      };
    }

    case GET_GENRES: {
      return {
        ...state,
        allGenres: payload,
      };
    }

    case POST_MOVIE: {
      return {
        ...state,
      };
    }

    case DELETE_MOVIE: {
      return {
        ...state,
      };
    }

    case FILTER_ORDER: {
      return {
        ...state,
        allMovies: payload,
      };
    }

    case POST_USER: {
      return {
        ...state,
      };
    }

    case PUT_USER: {
      return {
        ...state,
        userData: payload,
      };
    }

    case PUT_SUBSCRIPTION: {
      return {
        ...state,
      };
    }

    case DELETE_SUBSCRIPTION: {
      return {
        ...state,
      };
    }

    case LOGIN_USER: {
      return {
        ...state,
        userData: payload,
      };
    }

    case LOGOUT_USER: {
      return {
        ...state,
        userData: {},
      };
    }

    case GET_CANDY: {
      return {
        ...state,
        allCandy: payload,
      };
    }

    case ADD_TO_CART: {
      if (state.cart.length >= 5) {
        alert("No puedes seleccionar más de 5 productos.");
        return state;
      }

      let newItem = state.productTicket.find(
        (product) => product.name === payload
      );
      let itemCart = state.cart.find(
        (item) =>
          item.name.trim().toLowerCase() === newItem.name.trim().toLowerCase()
      );

      if (itemCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.name.trim().toLowerCase() === newItem.name.trim().toLowerCase()
              ? {
                  ...item,
                  price: item.price + newItem.price,
                  count: item.count + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...newItem, price: newItem.price, count: 1 }],
        };
      }
    }

    case REMOVE_ALL_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== payload),
      };
    }

    case REMOVE_ONE_CART: {
      let itemDelete = state.cart.find((item) => item.name === payload);
      let newItem = state.productTicket.find(
        (product) => product.name === payload
      );

      return itemDelete.count > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.name === payload
                ? {
                    ...item,
                    price: item.price - newItem.price,
                    count: item.count - 1,
                  }
                : item
            ),
            productCount: state.productCount - 1, // Actualizar el conteo al eliminar un producto
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.name !== payload),
            productCount: state.productCount - 1, // Actualizar el conteo al eliminar un producto
          };
    }

    case ADD_TO_CART_CANDY: {
      if (state.cart.length >= 5) {
        alert("No puedes seleccionar más de 5 productos.");
        return state;
      }

      const newCandy = state.allCandy.find(
        (product) => product.name === payload
      );
      const candyCart = state.cart.find(
        (item) =>
          item.name.trim().toLowerCase() === newCandy.name.trim().toLowerCase()
      );

      if (candyCart) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.name.trim().toLowerCase() ===
            newCandy.name.trim().toLowerCase()
              ? {
                  ...item,
                  price: item.price + newCandy.price,
                  count: item.count + 1,
                }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [
            ...state.cart,
            { ...newCandy, price: newCandy.price, count: 1 },
          ],
        };
      }
    }

    case REMOVE_ALL_CART_CANDY: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.name !== payload),
      };
    }
    case REMOVE_ONE_CANDY: {
      let itemDelete = state.cart.find((item) => item.name === payload);
      let newCandy = state.allCandy.find((product) => product.name === payload);

      return itemDelete.count > 1
        ? {
            ...state,
            cart: state.cart.map((item) =>
              item.name === payload
                ? {
                    ...item,
                    price: item.price - newCandy.price,
                    count: item.count - 1,
                  }
                : item
            ),
          }
        : {
            ...state,
            cart: state.cart.filter((item) => item.name !== payload),
          };
    }

    case SAVE_CART: {
      return {
        ...state,
        cart: payload,
      };
    }

    default:
      return { ...state };
  }
};

export default rootReducer;
