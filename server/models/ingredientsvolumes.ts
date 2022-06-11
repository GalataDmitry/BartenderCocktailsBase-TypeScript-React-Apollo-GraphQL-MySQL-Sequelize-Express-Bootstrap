import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
    class IngredientsVolumes
        extends Model<InferAttributes<IngredientsVolumes>,
            InferCreationAttributes<IngredientsVolumes>> {
        declare id: number
        declare ingId: number
        declare volId: number
    }

    IngredientsVolumes.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        ingId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Ingredients',
                key: 'id'
            }
        },
        volId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Volumes',
                key: 'id'
            }
        }
    }, {
        sequelize,
        modelName: 'IngredientsVolumes',
        timestamps: false
    })
    return IngredientsVolumes
}