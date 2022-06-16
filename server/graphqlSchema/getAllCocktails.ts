import {Resolver, Query} from "type-graphql"
const {Cocktails} = require ('../models')
const CocktailsType = require('./types/CocktailsType')

@Resolver()
export class GetAllCocktails {
    @Query(returns => [CocktailsType])
    async getAllCocktails() {
        try {
            return await Cocktails.findAll()
        } catch (error) {
            console.log(`[---> getAllCocktails error: ${error}`)
        }
    }
}


// @ObjectType()
// class User {
//     @Field({description: 'Gans'})
//     firstname!: string
//
//     @Field({description: 'Gansales'})
//     lastname!: string
// }
//
// @ObjectType()
// class Rate {
//
//     @Field(type => Int)
//     value!: number;
//
//     @Field(type => Date)
//     date!: Date;
//
//     user!: User;
// }
//
//
// @ObjectType({ description: "The recipe model" })
// class Recipe {
//     @Min(1)
//     @Max(5)
//     @Field(type => ID, {nullable: true})
//     id!: number
//
//     @Field({ description: "The title of the recipe" })
//     title!: string;
//
//     @Field(type => [Rate], {nullable: true})
//     ratings?: Rate[];
//
//     @Field({ nullable: true })
//     averageRating?: number;
// }
//
// @ArgsType()
// class GetRecipesArgs {
//     @Field(type => Int, { nullable: true })
//     skip?: number;
//
//     @Field(type => Int, { nullable: true })
//     take?: number;
//
//     @Field({ nullable: true })
//     title?: string;
// }
//
//
//
// @Resolver()
// class RecipeResolver {
//     private recipesCollection: Recipe[] = [];
//
//     @Query(returns => [Recipe])
//     async recipes(
//         @Arg("getSomething")getSomething: number
//     ): Promise<Recipe[]> {
//         return this.recipesCollection;
//     }
//     // @Query(returns => [])
//     // async bards(@Args() {take, title, skip}: GetRecipesArgs): Array<string> {
//     //     // if (take) {
//     //     //     //.....
//     //     // }
//     //     return ['Gans'];
//     // }
// }
//
