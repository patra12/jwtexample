'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Users', { 
    id: {
      allowNull: false,
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: Sequelize.STRING
      
    },
    password: {
      type: Sequelize.STRING
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
    
      return queryInterface.dropTable('Users');
   
  }
};
