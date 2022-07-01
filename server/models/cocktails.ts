import {InferAttributes, InferCreationAttributes, Model} from "sequelize"

module.exports = (sequelize: any, DataTypes: any) => {
     class Cocktails extends Model<InferAttributes<Cocktails>, InferCreationAttributes<Cocktails>> {
        declare id: number
        declare cockt_name: string
        declare createdAt: Date
        declare updatedAt: Date

        static associate(models: any) {
            Cocktails.belongsToMany(models.Ingredients, {through: 'CocktailsIngredients', foreignKey: 'cocktId'})
            Cocktails.hasOne(models.Descriptions, {foreignKey: 'cocktId'})
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
    })
    return Cocktails
}