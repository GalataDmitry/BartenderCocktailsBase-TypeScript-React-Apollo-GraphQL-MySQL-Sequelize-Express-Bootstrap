import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
    class CocktailsIngredients
        extends Model<InferAttributes<CocktailsIngredients>,
            InferCreationAttributes<CocktailsIngredients>> {
        declare id: number
        declare cocktId: number
        declare ingId: number
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
    })
    return CocktailsIngredients
}