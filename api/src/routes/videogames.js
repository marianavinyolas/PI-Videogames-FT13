const { Router } = require('express');
const { Videogame} = require('../db');
const axios = require('axios').default;
const { RAWG_GAMES} = require('../utils/urls.js');
const { API_KEY } = process.env;
const router = Router();

router.get('/', async (req, res) => {
  const {name} = req.query;
  try {
      let apiCall1 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}`);
      let apiCall2 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=2`);
      let apiCall3 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=3`);
      let apiCall4 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=4`);
      let apiCall5 = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&page=5`);
      let apiGames = await [...apiCall1.data.results, ...apiCall2.data.results, ...apiCall3.data.results, ...apiCall4.data.results, ...apiCall5.data.results ];
      apiGames = await apiGames && apiGames.map(game => ({
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
      let totalGames = await [...apiGames, ...dbGames]
      if(!name) {
        return res.json(totalGames);
        } else {
          let filtered = await totalGames.filter(g =>g.name.toLowerCase().includes(name.toLowerCase()))
          return res.json(filtered)
        }
  } catch (error) {
      return res.status(404).json({error: 'Sorry... name not found'})
  }
});

module.exports = router;