import axios from 'axios';

export const getAllVideogames = () => async (dispatch) => {
  try {
    const res = await axios.get ('http://localhost:3001/videogames/');
    dispatch({ type: 'GET_VIDEOGAMES', payload: res.data});
  } catch (err) {
    console.log(`Error found:${err}`)
  }
};

export const getVideogamesName = (name) => async (dispatch) => {
  try {
    const res = await axios.get (`http://localhost:3001/videogames?name=${name}`);
    dispatch({ type: 'GET_VIDEOGAME_SEARCH', payload: res.data});
  } catch (err) {
    console.log(`Error found:${err}`)
    dispatch({type: 'GET_VIDEOGAME_SEARCH', payload:[]});
  }
};


export const getVideogameDetail = (id) => async (dispatch) => {
  try {
    const res = await axios.get (`http://localhost:3001/videogame/${id}`)
    dispatch({ type: 'GET_VIDEOGAME_DETAIL', payload: res.data})
  } catch (err) {
    console.log(err)
  }
};

export const getGenre = (id) => async (dispatch) => {
  try {
    const res = await axios.get (`http://localhost:3001/genre`)
    dispatch({ type: 'SET_VIDEOGAME_DETAIL', payload: res.data})
  } catch (err) {
    console.log(err)
  }
};

export const clearUser = () => {
  return {
    type: 'SET_VIDEOGAME_DETAIL', payload: undefined
  }
}