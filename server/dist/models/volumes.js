import { Model } from 'sequelize';
module.exports = (sequelize, DataTypes) => {
    class Volumes extends Model {
        static associate(models) {
            Volumes.belongsToMany(models.Ingredients, { through: 'IngredientsVolumes' });
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
    });
    return Volumes;
};
//# sourceMappingURL=volumes.js.map