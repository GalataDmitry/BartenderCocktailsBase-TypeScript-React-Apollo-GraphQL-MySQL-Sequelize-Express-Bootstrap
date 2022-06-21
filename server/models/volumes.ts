import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
    class Volumes
        extends Model<InferAttributes<Volumes>, InferCreationAttributes<Volumes>> {
        declare id: number
        declare volume: number

        static associate(models: any) {
            this.belongsToMany(models.Ingredients, {through: 'IngredientsVolumes', foreignKey: 'ingId'})
        }
    }

    Volumes.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        volume: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
    }, {
        sequelize,
        modelName: 'Volumes',
        timestamps: false
    })
    return Volumes
}