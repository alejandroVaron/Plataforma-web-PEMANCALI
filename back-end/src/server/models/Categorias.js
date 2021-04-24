const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db')
  class Categorias extends Model {

    static associate(models) {

    }
  };
  Categorias.init({
    id_categoria: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_categoria: DataTypes.STRING,
    descripcion_categoria: DataTypes.STRING,
    url_img: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Categorias',
  });
  Categorias.removeAttribute('id')
  module.exports = Categorias;
