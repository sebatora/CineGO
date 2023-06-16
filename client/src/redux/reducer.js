import { GET_MOVIES, GET_MOVIE_BY_ID, GET_MOVIES_BY_TITLE, CLEAN_DETAIL, GET_GENRES, POST_MOVIE, DELETE_MOVIE, FILTER_ORDER, POST_USER } from "./action-type";

const initialState = {
  allMovies: [], 
  allMoviesCopy: [],
  movieById: {},
  allGenres: []
};

const rootReducer = (state = initialState, {type, payload}) => {

  switch(type){

    case GET_MOVIES: {
      return {
        ...state,
        allMovies: payload,
        allMoviesCopy: payload
      };
    };

    case GET_MOVIE_BY_ID: {
      return {
        ...state,
        movieById: payload,
      };
    };

    case GET_MOVIES_BY_TITLE: {
      return {
        ...state,
        allMovies: payload,
      };
    };

    case CLEAN_DETAIL: {
      return {
        ...state,
        movieById: {},
      };
    };

    case GET_GENRES: {
      return {
        ...state,
        allGenres: payload,
      };
    };

    case POST_MOVIE: {
      return {
        ...state,
      };
    };

    case DELETE_MOVIE: {
      return {
        ...state,
      };
    };

    case FILTER_ORDER: {
      return {
        ...state,
        allMovies: payload,
      }
    }

    case POST_USER: {
      return {
        ...state,
      };
    };

    default:
      return { ...state }
  }
}
export default rootReducer;