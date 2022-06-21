import {Resolver, Query} from "type-graphql"
import {GetAllCocktailsType} from './types/cocktailsTypes'
const {Cocktails, Ingredients, Volumes, Descriptions} = require ('../models')

@Resolver()
export class GetAllCocktails {
    @Query(returns => [GetAllCocktailsType])
    async getAllCocktails() {
        try {
            const allCockt = await Cocktails.findAll({
                include: [Descriptions, {model: Ingredients, include: [{model: Volumes}]}]
            })
            console.log(JSON.stringify(allCockt, null, 2));
            return allCockt
        } catch (error) {
            console.log(`[---> getAllCocktails error: ${error}`)
        }
    }
}

//___________________________________________________________//


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
