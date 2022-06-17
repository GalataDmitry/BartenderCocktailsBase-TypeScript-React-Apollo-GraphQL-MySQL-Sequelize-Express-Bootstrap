import {gql} from "@apollo/client"

export const GET_ALL_COCKTAILS = gql(`
        query getAllCocktails {
            getAllCocktails {
                id, cockt_name
            }
        }
`)