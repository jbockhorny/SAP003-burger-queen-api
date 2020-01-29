'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      idProduct: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {model: 'Products', key: 'id'}
      },
      idProductExtra: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {model: 'Products', key: 'id'}
      },
      counter: {
        type: Sequelize.INTEGER
      },
      option: {
        type: Sequelize.STRING
      },
      idOrder: {
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('items');
  }
};