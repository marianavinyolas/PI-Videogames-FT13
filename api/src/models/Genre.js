const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING, // chequear
    },
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true // chequear
    }
  });
};
