import "reflect-metadata"
import 'dotenv/config'
import {buildSchema} from "type-graphql"
import {graphqlHTTP} from 'express-graphql'
import {GetAllCocktails} from "./graphqlSchema/getAllCocktails"
import {CreateCocktail} from "./graphqlSchema/createCocktail"
import express from 'express'
import cors from 'cors'
import path from 'path'

const db = require('./models')
const PORT: number | string = process?.env?.PORT || 5050
const app = express()

app.use(cors())
app.use(express.json())
app.listen(PORT, () => console.log(`[---> server run on port ${PORT}`))

db.sequelize.authenticate()
    .then(() => console.log('[---> db successfully connected'))
    .catch((error: string) => console.log(`[---> db connect error: ${error}`))

const graphqlConnect = async () => {
    const schema = await buildSchema({
        resolvers: [GetAllCocktails, CreateCocktail],
        emitSchemaFile: path.resolve(__dirname, "schema.gql")
    })
    app.use('/graphql', graphqlHTTP({
        graphiql: true,
        schema
    }))
}

graphqlConnect()
    .then(() => console.log('[---> schemas created'))
    .catch((error: string) => console.log(`[---> schemas created with error: ${error}`))

//___________________________________________________________________//




// interface genericMyFunc {
//     <T extends number>(a: T, b: T, c?: T): number
// }
//
// function myFunc<T extends number>(a: T, b: T): number {
//     return a + b
// }
//
// const myFuncGeneric: genericMyFunc = myFunc
//
// console.log(myFuncGeneric(2, 4))
//
// type genericType = string | number
//
// interface genericClass<T, U> {
//     firstname: U
//     age: T
// }
//
// interface genericClass_1<T> {
//     lastname: T
//     role: T
// }
//
// interface genericClassFunc<T> {
//     (a?: T, b?: T): T
// }
//
// abstract class ExtClass {
//     hobby!: genericType
//     get getNAme(): genericType {
//        return this.hobby
//     }
// }
//
// class MyGenericClass extends ExtClass implements genericClass<number, string>, genericClass_1<string> {
//     firstname = 'Gans'
//     lastname = 'Gansales'
//     age = 35
//     role = 'Admin'
//     getFullName: genericClassFunc<string> = (firstname, lastname): string => {
//         return firstname + lastname !
//     }
// }
//
// const instClass = new MyGenericClass
// console.log(instClass.getFullName('a', 'b'))
// console.log(instClass.hobby)
//
// type indexType = {
//     [key: string]: string
// }
//
// const obj: indexType = {
//     lname: '1'
// }