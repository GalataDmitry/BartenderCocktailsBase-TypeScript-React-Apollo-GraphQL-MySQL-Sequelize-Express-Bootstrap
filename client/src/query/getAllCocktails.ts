import {gql} from "@apollo/client"

export const GET_ALL_COCKTAILS = gql(`
        query getAllCocktails {
            getAllCocktails {
                id, cockt_name, 
                    Description {id, cockt_desc},
                        Ingredients {id, ing_name, 
                            Volumes {id, volume}
                        }
            }
        }
`)