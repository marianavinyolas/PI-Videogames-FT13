import { sortVideogamesAsc,
        sortVideogamesDesc,
        filterBySource,
        filterByGenre,
        interseccion,
      } from '../utils/methods'

const initialState = {
  videogames: [],
  backVideogames: [],
  videogameGenres: [],
  videogameSource:[],
  videogameSearch: [],
  videogameDetail: {},
  genres: [],
  sorted: 'ALL',
};


const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEOGAMES': 
      return {
        ...state,
        videogames: action.payload,
        backVideogames: action.payload,
      };
    case 'RESET':
      return {
        ...state,
        videogames: state.backVideogames,
        videogameGenres: [],
        videogameSearch: [],
        videogameDetail: {},
        sorted: action.payload
      }
    case 'GET_VIDEOGAME_SEARCH':   // data[]
      let filter1 = interseccion(action.payload, state.videogames)
      return {
        ...state,
        videogameSearch: action.payload,
        videogames: filter1,

      };
    case 'BY_GENRES':               // 'genre'
      let filter= filterByGenre(action.payload, state.videogames)
      return {
        ...state,
        videogames: interseccion(filter, state.videogameSearch),
        videogameGenres: filter,
        // sorted: 'GENRES'  // revisar
      };
    case 'BY_SOURCE':                // 'source'
      let filter3 = filterBySource(action.payload, state.videogames)
      return {
        ...state,
        videogames: interseccion(filter3, state.videogameSearch),
        videogameSource:filter3
      };
    case 'SORT_AZ':
      return {
        ...state,
        videogames: sortVideogamesAsc(state.videogames, 'name'),
        sorted: action.payload
        }
    case 'SORT_ZA':
      return {
        ...state,
        videogames: sortVideogamesDesc(state.videogames, 'name'),
        sorted: action.payload
        }
    case 'RATING_UP':
      return {
        ...state,
        videogames: sortVideogamesAsc(state.videogames, 'rating'),
        sorted: action.payload
      }
    case 'RATING_DOWN':
      return {
        ...state,
        videogames: sortVideogamesDesc(state.videogames, 'rating'),
        sorted: action.payload
        };
    case 'GET_VIDEOGAME_DETAIL': 
      return {
        ...state,
        videogameDetail: action.payload
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
      };
    default:
      return state;
  }
};

export default rootReducer;