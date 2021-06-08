const { Router } = require('express');

const videogames = require('./videogames');
const videogame = require('./videogame');
const genre = require('./genre');

const router = Router();

router.use('/videogames', videogames);
router.use('/videogame', videogame);
router.use('/genre', genre);

module.exports = router;
