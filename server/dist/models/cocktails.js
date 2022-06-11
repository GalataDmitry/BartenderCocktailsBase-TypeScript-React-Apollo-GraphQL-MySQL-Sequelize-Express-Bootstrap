'use strict';
import { Model } from "sequelize";
module.exports = (sequelize, DataTypes) => {
    class Cocktails extends Model {
        static associate(models) {
            Cocktails.belongsToMany(models.Ingredients, { through: 'CocktailsIngredients' });
            Cocktails.hasOne(models.Descriptions, { foreignKey: 'cocktId' });
        }
    }
    Cocktails.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cockt_name: {
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
        modelName: 'Cocktails',
    });
    return Cocktails;
};
//# sourceMappingURL=cocktails.js.map