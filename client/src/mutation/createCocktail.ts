import {gql} from "@apollo/client"
//$cocktData: CreateCocktailType!
//cocktData: $cocktData
export const CREATE_COCKTAIL = gql(`
        mutation createCocktail ($cocktData: [CreateCocktailType!]!)
            {
                createCocktail (cocktData: $cocktData)
                    {id, cockt_name}
            }
`)