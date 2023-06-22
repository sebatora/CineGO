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
  ADD_TO_CART_CANDY
} from "./action-type";

const initialState = {
  allMovies: [],
  allMoviesCopy: [],
  movieById: {},
  allGenres: [],
  userData: {},
  allCandy: [],
  cart:[],
  productTicket: [
    {
      "id": 1,
      "name": "general",
      "image": "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1687.png",
      "price": 200,
      "description": "Entrada Promocional No acumulable con otras promociones. Lunes y martes."
    },
    {
      "id": 2,
      "name": "cineFan",
      "image": "https://static.cinemarkhoyts.com.ar/Images/TicketTypeImage/1667.png",
      "price": 290,
      "description": "Incluye 2 entradas + Tarjeta Virtual."
    }
  ]
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


    case ADD_TO_CART :{
      let newItem = state.productTicket.find(product => product.id === payload);

      let itemCart = state.cart.find(item => item.id === newItem.id);
      

      return itemCart ? {
        ...state,
        cart: state.cart.map(item => item.id === newItem.id ? {...item, price: item.price + newItem.price}
          :item
          )
      }
      :{
        ...state,
        cart: [...state.cart, {...newItem, price: newItem.price}]
      }
    }

    case ADD_TO_CART_CANDY :{
      let newCandy = state.allCandy.find(product => product.id === payload);

      let candyCart = state.cart.find(item => item.id === newCandy.id);
      

      return candyCart ? {
        ...state,
        cart: state.cart.map(item => item.id === newCandy.id ? {...item, price: item.price + newCandy.price}
          :item
          )
      }
      :{
        ...state,
        cart: [...state.cart, {...newCandy, price: newCandy.price}]
      }
    }

    default:
      return { ...state };
  }
};
export default rootReducer;
