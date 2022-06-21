import {Resolver, Mutation, Args, Arg} from "type-graphql"
import {CreateCocktailInputType, GetAllCocktailsType} from './types/cocktailsTypes'
const {Descriptions, Cocktails, Ingredients, CocktailsIngredients, Volumes, IngredientsVolumes} = require('../models')

@Resolver()
export class CreateCocktail {
    @Mutation(returns => [GetAllCocktailsType])
    async createCocktail() { //@Args() {cockt_name, cockt_desc, ing_name}: CreateCocktailInputType
        // console.log('server mutation', cockt_name, cockt_desc, ing_name)
        try {
            // return await CocktailsIngredients.create({cocktId: 1, ingId: 1})
            // return await Cocktails.create({cockt_name: 'Last Word'})
            // return await Descriptions.create({cockt_desc: 'Hello World', cocktId: 1})
        } catch (error) {
            console.log(`[---> createCocktails error: ${error}`)
        }
    }
}
