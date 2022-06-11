module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('IngredientsVolumes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id'
        }
      },
      volId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Volumes',
          key: 'id'
        }
      }
    })
  },
  async down(queryInterface: any) { //, Sequelize: any
    await queryInterface.dropTable('IngredientsVolumes')
  }
}