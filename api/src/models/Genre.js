const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING, // chequear
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      // autoIncrement: true // chequear
    }
  });
};



// GET /genres/{id}   https://api.rawg.io/api/genres/{id}

let jsonId = {
  "id": 0,
  "name": "string",
  "slug": "string",
  "games_count": 0,
  "image_background": "http://example.com",
  "description": "string"
}