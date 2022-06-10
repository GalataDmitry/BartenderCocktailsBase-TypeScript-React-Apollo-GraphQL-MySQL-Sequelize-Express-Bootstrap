// // const sequelize = require('../connectConfig/connectConfig')
//
// module.exports = () => {
//     // sequelize.sync()
//     //     .then(() => console.log('success sync'))
//     //     .catch((error: any) => console.log(`sync error${error}`))
//     sequelize.authenticate()
//         .then(() => console.log('db successfully connected'))
//         .catch((error: object) => console.log(`db connect error [---> ${error}`))
// }