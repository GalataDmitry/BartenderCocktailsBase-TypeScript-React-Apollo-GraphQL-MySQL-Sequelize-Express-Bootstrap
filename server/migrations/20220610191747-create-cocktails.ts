'use strict'
module.exports = {
    async up(queryInterface: any, DataTypes: any) {
        await queryInterface.createTable('Cocktails', {
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
        })
    },
    async down(queryInterface: any) { //, Sequelize: any
        await queryInterface.dropTable('Cocktails')
    }
}