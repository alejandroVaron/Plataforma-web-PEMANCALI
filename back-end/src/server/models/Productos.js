const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
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
    id_producto: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre_producto: DataTypes.STRING,
    descripcion_producto: DataTypes.STRING,
    url_img: DataTypes.STRING,
    precio_producto: DataTypes.FLOAT,
    id_categoria: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Productos',
  });
  Productos.removeAttribute('id');
  module.exports = Productos;
