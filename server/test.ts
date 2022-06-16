// type Constructor = { new(...ars: any[]): {} }
// type NewConstructor<T = {}> = { new(...ars: any[]): T }
// // type NewConstructor_1 = NewConstructor<{ firstname: 'Gans' }>
//
// class Mixin {
//     firstname = 'Gans'
//     role = 'admin'
// }
//
// const mixinFunction = <T extends Constructor>(baseClass: T) => {
//     console.log(baseClass)
//     return class extends baseClass {
//         lastname = 'Gansales'
//
//         getData() {
//             // return this.firstname
//             // this.lastname
//         }
//
//     }
// }
//
// const mixinClass = mixinFunction(Mixin)
// const newMixinClass = new mixinClass
// console.log(newMixinClass.getData())