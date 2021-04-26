const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db');
  class Pedidos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Pedidos.init({
    id_pedido: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    id_usuario: DataTypes.INTEGER,
    id_producto: DataTypes.INTEGER,
    cantidad: DataTypes.INTEGER,
    valor_total: DataTypes.FLOAT,
    fecha_pedido: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedidos',
  });
  Pedidos.removeAttribute('id');
  module.exports = Pedidos;
