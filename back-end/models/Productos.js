'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Productos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Productos.init({
    nombre_producto: DataTypes.STRING,
    descripcion_producto: DataTypes.STRING,
    url_img: DataTypes.STRING,
    precio_producto: DataTypes.FLOAT,
    categoria_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  return Productos;
};