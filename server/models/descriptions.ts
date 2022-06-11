import {InferAttributes, InferCreationAttributes, Model} from 'sequelize'

module.exports = (sequelize: any, DataTypes: any) => {
    class Descriptions
        extends Model<InferAttributes<Descriptions>,
            InferCreationAttributes<Descriptions>> {
        declare id: number
        declare cockt_desc: string
        declare cocktId: number
        declare createdAt: Date
        declare updatedAt: Date

        static associate(models: any) {
            Descriptions.belongsTo(models.Cocktails, {foreignKey: 'cocktId'})
        }
    }

    Descriptions.init({
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER
        },
        cockt_desc: {
            allowNull: false,
            type: DataTypes.STRING
        },
        cocktId: {
            allowNull: false,
            type: DataTypes.INTEGER,
            references: {
                model: 'Cocktails',
                key: 'id'
            }
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
        modelName: 'Descriptions',
    })
    return Descriptions
}