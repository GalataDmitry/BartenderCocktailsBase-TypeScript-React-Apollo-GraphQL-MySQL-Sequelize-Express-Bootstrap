import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Descriptions extends Model {
        static associate(models) {
            Descriptions.belongsTo(models.Cocktails, { foreignKey: 'cocktId' });
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
    });
    return Descriptions;
};
//# sourceMappingURL=descriptions.js.map