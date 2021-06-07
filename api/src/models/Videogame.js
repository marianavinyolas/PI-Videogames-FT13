const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    released: {
      type: DataTypes.STRING,  // chequear si queda string o date
      // allowNull: false,
    },
    rating: {
      type: DataTypes.FLOAT, // chequear si lo cambio a INTEGER
      // allowNull: false,
    },
    platforms: {   // https://api.rawg.io/docs/#operation/games_read chequear que type es aca adentro
      type: DataTypes.JSON,
      allowNull: false,
    },
    id: {  // ver como diferenciar los IDs de la API y la DB
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,  //chequear este uuid4
      primaryKey: true,
      // allowNull: false,
    },
  });
};

// GET /games   https://api.rawg.io/api/games

let json = {
  "count": 0,
  "next": "http://example.com",
  "previous": "http://example.com",
  "results": [
    {
      "id": 0,
      "slug": "string",
      "name": "string",
      "released": "2021-06-06",
      "tba": true,
      "background_image": "http://example.com",
      "rating": 0,
      "rating_top": 0,
      "ratings": {},
      "ratings_count": 0,
      "reviews_text_count": "string",
      "added": 0,
      "added_by_status": {},
      "metacritic": 0,
      "playtime": 0,
      "suggestions_count": 0,
      "updated": "2021-06-06T02:14:05Z",
      "esrb_rating": {
        "id": 0,
        "slug": "everyone",
        "name": "Everyone"
      },
      "platforms": [
        {
          "platform": {
            "id": 0,
            "slug": "string",
            "name": "string"
          },
          "released_at": "string",
          "requirements": {
            "minimum": "string",
            "recommended": "string"
          }
        }
      ]
    }
  ]
}

// GET /games/{id}   https://api.rawg.io/api/games/{id}

let jsonId = {
  "id": 0,
  "slug": "string",
  "name": "string",
  "name_original": "string",
  "description": "string",
  "metacritic": 0,
  "metacritic_platforms": [
    {
      "metascore": 0,
      "url": "string"
    }
  ],
  "released": "2021-06-06",
  "tba": true,
  "updated": "2021-06-06T02:14:05Z",
  "background_image": "http://example.com",
  "background_image_additional": "string",
  "website": "http://example.com",
  "rating": 0,
  "rating_top": 0,
  "ratings": {},
  "reactions": {},
  "added": 0,
  "added_by_status": {},
  "playtime": 0,
  "screenshots_count": 0,
  "movies_count": 0,
  "creators_count": 0,
  "achievements_count": 0,
  "parent_achievements_count": "string",
  "reddit_url": "string",
  "reddit_name": "string",
  "reddit_description": "string",
  "reddit_logo": "http://example.com",
  "reddit_count": 0,
  "twitch_count": "string",
  "youtube_count": "string",
  "reviews_text_count": "string",
  "ratings_count": 0,
  "suggestions_count": 0,
  "alternative_names": [
    "string"
  ],
  "metacritic_url": "string",
  "parents_count": 0,
  "additions_count": 0,
  "game_series_count": 0,
  "esrb_rating": {
    "id": 0,
    "slug": "everyone",
    "name": "Everyone"
  },
  "platforms": [
    {
      "platform": {
        "id": 0,
        "slug": "string",
        "name": "string"
      },
      "released_at": "string",
      "requirements": {
        "minimum": "string",
        "recommended": "string"
      }
    }
  ]
}
