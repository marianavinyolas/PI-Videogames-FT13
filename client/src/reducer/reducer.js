
const initialState = {
  videogames: [],
  backVideogames: [],
  videogamesDetail: [],
  search: [],
  genres: [],
  sorted: 'ALL',

};

const sortVideogamesAsc = ( array, field) => {
  array.sort((a, b) => {
    if (a[field] > b[field]) {
      return 1;
    }
    if (a[field] < b[field]) {
      return -1;
    }
  return 0;
})
  return array;
}

const sortVideogamesDesc = ( array, field) => {
  array.sort((a, b) => {
    if (a[field] < b[field]) {
      return 1;
    }
    if (a[field] > b[field]) {
      return -1;
    }
    return 0;
  })
  return array;
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEOGAMES': 
    return {
      ...state,
      videogames: action.payload,
      backVideogames: action.payload
    };
    case 'RESET':
      return {
        ...state,
        videogames: state.backVideogames,
        sorted: action.payload
      }
    case 'GET_VIDEOGAME_SEARCH': 
      return {
        ...state,
        videogames: action.payload,
        search: action.payload
      };
    case 'GET_VIDEOGAME_DETAIL': 
      return {
        ...state,
        videogamesDetail: action.payload
      };
    case 'GET_GENRES':
      return {
        ...state,
        genres: action.payload
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
        }





    default:
      return state;
  }
};


export default rootReducer

