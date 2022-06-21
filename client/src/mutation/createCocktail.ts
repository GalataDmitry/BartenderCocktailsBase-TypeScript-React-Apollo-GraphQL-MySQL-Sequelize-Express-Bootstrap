import {gql} from "@apollo/client"

export const CREATE_COCKTAIL = gql(`
        mutation createCocktail ($cockt_name: String!, $ing_name: [String!]!, $cockt_desc: String!)
            {
                createCocktail (cockt_name: $cockt_name, ing_name: $ing_name, cockt_desc: $cockt_desc)
                    {id, cockt_name}
            }
`)