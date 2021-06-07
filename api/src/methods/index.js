const {Videogame, Genre} = require('../db');
const axios = require('axios').default;
const { RAWG_GENRES } = require('../utils/urls.js');
const { API_KEY } = process.env;





const addGenresDB = async () => {

};
// axios.get(`${VIDEOGAMES_GENRES}?key=${API_KEY}`).then((element) => {
//   element.data.results.forEach((el) => Genre.create({id:el.id, name: el.name}));
//   console.log('GENEROS AGREGADOS');


module.exports = addGenresDB;
