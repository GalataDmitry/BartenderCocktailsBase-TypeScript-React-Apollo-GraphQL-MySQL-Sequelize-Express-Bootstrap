module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('Descriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cockt_desc: {
        allowNull: false,
        type: Sequelize.STRING
      },
      cocktId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cocktails',
          key: 'id'
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
  async down(queryInterface: any) { //, Sequelize: any
    await queryInterface.dropTable('Descriptions');
  }
};