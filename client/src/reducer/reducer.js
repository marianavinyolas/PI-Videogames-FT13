
const initialState = {
  videogames: [],
  videogamesDetail: [],
  search: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_VIDEOGAMES': 
      return {
        ...state,
        videogames: action.payload
      };
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
    default:
      return state;
  }
};


export default rootReducer

