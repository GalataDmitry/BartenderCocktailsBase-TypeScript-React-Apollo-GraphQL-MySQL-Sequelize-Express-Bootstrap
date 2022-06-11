import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class IngredientsVolumes extends Model {
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
    });
    return IngredientsVolumes;
};
//# sourceMappingURL=ingredientsvolumes.js.map