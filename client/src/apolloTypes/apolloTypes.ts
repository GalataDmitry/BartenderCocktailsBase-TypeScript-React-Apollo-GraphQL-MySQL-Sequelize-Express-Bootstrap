interface ICocktail {
    id: number
    cockt_name: string
    __typename: string
}

export interface IGetAllCocktailsData {
    getAllCocktails: ICocktail[]
}