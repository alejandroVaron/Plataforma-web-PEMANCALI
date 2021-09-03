'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id_usuario: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_usuario: {
        type: Sequelize.STRING
      },
      apellido_usuario: {
        type: Sequelize.STRING
      },
      celular_usuario: {
        type: Sequelize.BIGINT,
        unique: true
      },
      email_usuario: {
        type: Sequelize.STRING,
        unique: true
      },
      contraseña_usuario: {
        type: Sequelize.STRING
      },
      rol_usuario: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};