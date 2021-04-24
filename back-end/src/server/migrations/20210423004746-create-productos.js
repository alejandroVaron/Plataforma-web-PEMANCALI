'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Productos', {
      id_producto: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre_producto: {
        type: Sequelize.STRING
      },
      descripcion_producto: {
        type: Sequelize.STRING
      },
      url_img: {
        type: Sequelize.STRING
      },
      precio_producto: {
        type: Sequelize.FLOAT
      },
      id_categoria: {
        type: Sequelize.INTEGER,
        references: {
          model: "Categorias",
          key: "id_categoria"
        }
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
    await queryInterface.dropTable('Productos');
  }
};