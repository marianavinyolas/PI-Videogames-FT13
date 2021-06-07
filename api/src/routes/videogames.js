const { Router } = require('express');
const { Videogame, Genre } = require('../db');
const axios = require('axios').default;
const { RAWG_GAMES, RAWG_GAMES_ID } = require('../utils/urls.js');
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

// GET /videogames?name="...":
// Obtener un listado de las primeros 15 videojuegos que contengan la palabra ingresada como query parameter
// Si no existe ningún videojuego mostrar un mensaje adecuado

router.get('/', async (req, res) => {
  const {name} = req.query;
  if(name) {
    try {
      const response = await axios.get(`${RAWG_GAMES}?key=${API_KEY}&search=${name}`)
      response = response.slice(0,15);
      return res.json(response.data.results);
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
      image: game.background_image,
      released: game.released,
      rating: game.rating,
      platforms: game.platforms,
      id: game.id
    }))
    let dbGames = await Videogame.findAll();
    let totalGames = [...apiGames, ...dbGames]
    return res.json(totalGames);
  }
});

//  POST /videogame:
// Recibe los datos recolectados desde el formulario controlado de la ruta de creación de videojuego por body
// Crea un videojuego en la base de datos
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
// SequelizeForeignKeyConstraintError: insert or update on table "Videogame_Genre" violates foreign key constraint "Videogame_Genre_genreId_fkey"

module.exports = router;