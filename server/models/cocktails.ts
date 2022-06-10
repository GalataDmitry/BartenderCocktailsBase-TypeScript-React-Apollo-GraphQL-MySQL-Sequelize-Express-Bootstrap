'use strict'
const {Model} = require('sequelize')
interface ICocktails {
    id: number
    cockt_name: string
    createdAt: number | string
    updatedAt: number | string
}

module.exports = (sequelize: any, DataTypes: any) => {
    class Cocktails extends Model<ICocktails>{
        declare id: number
        declare cockt_name: string
        declare createdAt: number | string
        declare updatedAt: number | string
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        // static associate(models: any) {
        //   // define association here
        // }
    }
    Cocktails['init']({
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