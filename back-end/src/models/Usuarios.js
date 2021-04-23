'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuarios extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuarios.init({
       nombre_usuario: DataTypes.STRING,
       apellido_usuario: DataTypes.STRING,
       celular_usuario: DataTypes.STRING,
       email_usuario: DataTypes.STRING,
       rol_usuario: DataTypes.INTEGER,
  }, {
    sequelize,
    tableName: 'usuarios',
    modelName: 'Usuarios',
  });
  return Usuarios;
};