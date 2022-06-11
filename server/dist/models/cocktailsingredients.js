import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class CocktailsIngredients extends Model {
    }
    CocktailsIngredients.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cocktId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Cocktails',
                key: 'id'
            }
        },
        ingId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Ingredients',
                key: 'id'
            }
        },
    }, {
        sequelize,
        modelName: 'CocktailsIngredients',
        timestamps: false
    });
    return CocktailsIngredients;
};
//# sourceMappingURL=cocktailsingredients.js.map