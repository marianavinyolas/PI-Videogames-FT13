const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios').default;
const { RAWG_GAMES} = require('../utils/urls.js');
const { API_KEY } = process.env;
const router = Router();

// GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado


router.get('/', async (req, res) => {
  const {name} = req.query;
  let game;
  if(name) {
    try {
      game =  await axios.get(`${RAWG_GAMES}?key=${API_KEY}&search=${name}`)



      return res.json(game.data.results);
    } catch (error) {
      if(error.response?.status === 404) {
        const game = Videogame.findAll();
        if(game) return res.json(game);
        return res.status(404).json({error: 'Sorry... name not found'})
      }
      return res.status(500)
    }
  } else {  // each api call brings 20 games
    let apiCall1 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}`);
    let apiCall2 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=2`);
    let apiCall3 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=3`);
    let apiCall4 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=4`);
    let apiCall5 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=5`);
    let apiGames = [...apiCall1.data.results, ...apiCall2.data.results, ...apiCall3.data.results, ...apiCall4.data.results, ...apiCall5.data.results ];
    apiGames = apiGames.map(game => ({
      name: game.name,
      description: game.description,
      background_image: game.background_image,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms,
      id: game.id,
      genres: game.genres
    }))
    let dbGames = await Videogame.findAll();
    let totalGames = [...apiGames, ...dbGames]
    return res.json(totalGames);
  }
});



module.exports = router;