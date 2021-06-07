const { Router } = require('express');

const videogames = require('./videogames');
const genre = require('./genre');

const router = Router();

router.use('/videogames', videogames);
router.use('/genre', genre);

module.exports = router;
