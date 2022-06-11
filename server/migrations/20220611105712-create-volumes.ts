'use strict';
module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Volumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      volume: {
        allowNull: false,
        type: Sequelize.INTEGER
      }
    });
  },
  async down(queryInterface: any) { //, Sequelize: any
    await queryInterface.dropTable('Volumes');
  }
};