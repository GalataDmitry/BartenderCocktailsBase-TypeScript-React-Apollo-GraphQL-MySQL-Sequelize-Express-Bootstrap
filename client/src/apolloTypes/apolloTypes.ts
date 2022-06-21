interface IIngredients {
    id: number
    ing_name: string
    Volumes: IVolumes[]
}
interface IVolumes {
    id: number
    volume: string
}
interface IDescription {
    id: number
    cockt_desc: string
}
interface ICocktail {
    id: number
    cockt_name: string
    Description: IDescription
    Ingredients: IIngredients[]
}

export interface IGetAllCocktailsData {
    getAllCocktails: ICocktail[]
}

export interface ICreateCocktailInputType {
    cockt_name?: string
    ing_name?: string[]
    cockt_desc?: string
}