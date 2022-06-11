module.exports = {
  async up(queryInterface: any, Sequelize: any) {
    await queryInterface.createTable('CocktailsIngredients', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cocktId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Cocktails',
          key: 'id'
        },
      },
      ingId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'Ingredients',
          key: 'id'
        },
      }
    })
  },
  async down(queryInterface: any) { //, Sequelize: any
    await queryInterface.dropTable('CocktailsIngredients')
  }
}