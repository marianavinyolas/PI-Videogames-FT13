const { Router } = require('express');
const { Videogame } = require('../db');
const axios = require('axios').default;
const { RAWG_GAMES_ID } = require('../utils/urls.js');
const { API_KEY } = process.env;
const router = Router();


  // GET /videogame/{idVideogame}:
  // Obtener el detalle de un videojuego en particular
  // Debe traer solo los datos pedidos en la ruta de detalle de videojuego
  // Incluir los géneros asociados
router.get('/:id', async (req, res) => {
  let {id} = req.params
  try {
    const response = await axios.get(`${RAWG_GAMES_ID}${id}?key=${API_KEY}`)
    console.log(response.data)
    return res.send(response.data);
  } catch (error) {
    if(error.response?.status === 404) {
      const game = Videogame.findAll();
      if(game) return res.json(game);
      return res.statusCode(404)
    }
    return res.status(500).json({error: 'Sorry... id not found'})
  }
});

router.post('/', async (req, res) => {
  let {name, description, released, rating, platforms, genre} = req.body
  
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
    await newGame.setGenres(genre) // mixing method, esto le agrega genre a la otra tabla
    return res.send(newGame);
  // } catch (error) {
  //   return res.status(400).send(error)
  // }
});

module.exports = router;
