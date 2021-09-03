const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database/db')
  class Usuarios extends Model {

    static associate(models) {

    }
  }
  Usuarios.init({
       id_usuario: {
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
          type: DataTypes.INTEGER
       },
       nombre_usuario: DataTypes.STRING,
       apellido_usuario: DataTypes.STRING,
       celular_usuario: DataTypes.STRING,
       email_usuario: {
         type:DataTypes.STRING,
         primaryKey: true
       },
       contraseña_usuario: DataTypes.STRING,
       rol_usuario: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Usuarios',
  });
  Usuarios.removeAttribute('id')
  module.exports = Usuarios;
