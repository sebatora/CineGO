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

const initialState = {
  allMovies: [],
  allMoviesCopy: [],
  movieById: {},
  movieByIdCopy: {},
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
        cart: state.cart.map(item => item.id === newItem.id ? {...item, price: item.price + newItem.price, count: item.count + 1}
          :item
          )
      }
      :{
        ...state,
        cart: [...state.cart, {...newItem, price: newItem.price, count:1}]
      }
    }
    case REMOVE_ALL_CART: {
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      }
    }
    case REMOVE_ONE_CART: {
      let itemDelete = state.cart.find(item => item.id === payload)
      let newItem = state.productTicket.find(product => product.id === payload)

      return itemDelete.count > 1 ? {
        ...state,
        cart: state.cart.map(item => item.id === payload?{...item, price: item.price - newItem.price, count: item.count - 1 }:item)
      }:{
        ...state,
        cart: state.cart.filter(item => item.id !== payload)
      }
     
    }

    case ADD_TO_CART_CANDY :{
      let newCandy = state.allCandy.find(product => product.name === payload);

      let candyCart = state.cart.find(item => item.name === newCandy.name);
      

      return candyCart ? {
        ...state,
        cart: state.cart.map(item => item.name === newCandy.name ? {...item, price: item.price + newCandy.price, count: item.count + 1}
          :item
          )
      }
      :{
        ...state,
        cart: [...state.cart, {...newCandy, price: newCandy.price, count:1}]
      }
    }

    case REMOVE_ALL_CART_CANDY: {
      return {
        ...state,
        cart: state.cart.filter(item => item.name !== payload)
      }
    }
    case REMOVE_ONE_CANDY: {
      let itemDelete = state.cart.find(item => item.name === payload)
      let newCandy = state.allCandy.find(product => product.name === payload);

      return itemDelete.count > 1 ? {
        ...state,
        cart: state.cart.map(item => item.name === payload?{...item, price: item.price - newCandy.price,  count: item.count - 1}:item)
      }:{
        ...state,
        cart: state.cart.filter(item => item.name !== payload)
      }
     
    }

    default:
      return { ...state };
  }
};
export default rootReducer;
