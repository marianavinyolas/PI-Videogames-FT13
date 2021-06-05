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
      type: DataTypes.STRING,
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
