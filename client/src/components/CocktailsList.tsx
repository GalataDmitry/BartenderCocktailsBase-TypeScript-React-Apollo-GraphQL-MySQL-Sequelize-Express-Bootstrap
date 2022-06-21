import {FC} from "react"
// import WithData from "./hoc/WithData"
import {IGetAllCocktailsData} from "../apolloTypes/apolloTypes"
import {useQuery} from "@apollo/client";
import {GET_ALL_COCKTAILS} from "../query/getAllCocktails";

const CocktailsList: FC = () => {
    const {loading, error, data} = useQuery<IGetAllCocktailsData>(GET_ALL_COCKTAILS)
    console.log('ебана дэйта', data)
    return <div className='container-fluid'>
        <div className="row">
            <div className="col">
                {data?.getAllCocktails.map(cocktail => {
                    return <div className="row">
                        <div className="col">
                            <button
                                className='btn btn-info'>
                                {cocktail.cockt_name}
                            </button>
                        </div>
                        <div className="col">
                            {data?.getAllCocktails
                                .map(cocktail => cocktail.Description.cockt_desc)}
                        </div>
                        <div className="col">
                            {data?.getAllCocktails
                                .map(cocktail => cocktail.Ingredients
                                    .map(ingredient => {
                                        return <div>{ingredient.ing_name}</div>
                                    }))}
                        </div>
                        <div className="col">
                            {data?.getAllCocktails
                                .map(cocktail => cocktail.Ingredients
                                    .map(ingredient => ingredient.Volumes
                                        .map(volume => {
                                            return <div>{volume.volume}</div>
                                        })))}
                        </div>

                    </div>
                })}
            </div>
        </div>
    </div>
}

export default CocktailsList