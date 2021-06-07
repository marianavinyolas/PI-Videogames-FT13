const { Router } = require('express');
const { Genre } = require('../db');
const router = Router();

router.get('/', async (req, res) => {
  let allGenres = await Genre.findAll();
  return res.send(allGenres)
});

module.exports = router;