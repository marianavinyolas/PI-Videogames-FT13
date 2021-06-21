const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios').default;
const { RAWG_GAMES_ID } = require('../utils/urls.js');
const { API_KEY } = process.env;
const router = Router();

router.get('/:id', async (req, res) => {
  let {id} = req.params
  try {
    const response = await axios.get(`${RAWG_GAMES_ID}${id}?key=${API_KEY}`)
    console.log(response.data)
    // const games = await response.data
    const games = {
      name: response.data.name,
      description: response.data.description,
      background_image: response.data.background_image,
      released: response.data.released,
      rating: response.data.rating,
      platforms: response.data.platforms,
      id: response.data.id,
      genres: response.data.genres
    }
    // console.log(games)
    return res.send(games);
    // return res.send(response.data);
    } catch (error) {
    if(error.response?.status === 404) {
      const game = await Videogame.findAll({
        include:{
          model: Genre,
          attributes: ['id','name'],
          through:{
              attributes:[],
          }
        }
      });
      const filtered = await game.filter( e => e.id === id).shift()
      if(filtered) return res.json(filtered);
      return res.statusCode(404)
    }
    return res.status(500).json({error: 'Sorry... id not found'})
  }
});




router.post('/', async (req, res) => {
  let {name, description, released, rating, platforms, genres} = req.body
  
    if(!name || !description || !platforms) {
      return res.status(400).json({error: 'Sorry... all parameters are required'})
    }
    let newGame = await Videogame.create({
      name: name,
      description: description,
      released: released,
      rating: rating,
      platforms: platforms,
    })
    console.log(newGame)
    await newGame.setGenres(genres) // mixing method, esto le agrega genre a la otra tabla
    return res.send(newGame);
});

module.exports = router;
