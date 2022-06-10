module.exports = {
    async up(queryInterface: any, Sequelize: any): Promise<void> {
        await queryInterface.createTable('Cocktails', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            cockt_name: {
                allowNull: false,
                type: Sequelize.STRING
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        })
    },
    async down(queryInterface: any): Promise<void>{ //, Sequelize: any
        await queryInterface.dropTable('Cocktails')
    }
}