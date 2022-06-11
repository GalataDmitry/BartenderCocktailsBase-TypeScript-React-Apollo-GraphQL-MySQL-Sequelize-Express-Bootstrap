import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
    class Ingredients extends Model<InferAttributes<Ingredients>, InferCreationAttributes<Ingredients>> {
        declare id: number
        declare ing_name: string
        declare createdAt: Date
        declare updatedAt: Date

        static associate(models: any) {
            Ingredients.belongsToMany(models.Cocktails, {through: 'CocktailsIngredients'})
            Ingredients.belongsToMany(models.Volumes, {through: 'IngredientsVolumes'})
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
    })
    return Ingredients
}