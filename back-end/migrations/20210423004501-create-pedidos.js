'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Pedidos', {
      id_pedido: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model:"Usuarios",
          key: "id_usuario"
        }
      },
      id_producto: {
        type: Sequelize.INTEGER,
        references: {
          model:"Productos",
          key: "id_producto"
        }
      },
      cantidad: {
        type: Sequelize.INTEGER
      },
      valor_total: {
        type: Sequelize.FLOAT
      },
      fecha_pedido: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Pedidos');
  }
};