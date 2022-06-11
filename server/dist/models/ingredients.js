import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Ingredients extends Model {
        static associate(models) {
            Ingredients.belongsToMany(models.Cocktails, { through: 'CocktailsIngredients' });
            Ingredients.belongsToMany(models.Volumes, { through: 'IngredientsVolumes' });
        }
    }
    Ingredients.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ing_name: {
            allowNull: false,
            type: DataTypes.STRING
        },
        createdAt: {
            allowNull: false,
            type: DataTypes.DATE
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE
        }
    }, {
        sequelize,
        modelName: 'Ingredients',
    });
    return Ingredients;
};
//# sourceMappingURL=ingredients.js.map