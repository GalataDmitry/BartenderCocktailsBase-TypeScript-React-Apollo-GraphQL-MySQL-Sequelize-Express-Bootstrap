import {FC, useState} from "react"
import {useQuery} from "@apollo/client"
import {GET_ALL_COCKTAILS} from "../../query/getAllCocktails"
import {IAddCocktails} from "../../reactTypes/reactTypes"
import {IGetAllCocktailsData} from '../../apolloTypes/apolloTypes'

const WithData = (Component: FC<IAddCocktails<string, number>>) => {

    const HelperComponent: FC<IAddCocktails<string, number>> = (hocProps) => {

        const { loading, error, data } = useQuery<IGetAllCocktailsData>(GET_ALL_COCKTAILS)

        const [cocktName, setCocktName] = useState<typeof hocProps.cockt_name>('')

        const onChangeFunction: typeof hocProps.onChangeFunction= (event) =>
            setCocktName(event.target.value)
        const resetState: typeof hocProps.resetState = () => setCocktName('')

        if (loading) return <>Loading...</>
        if (error) return <>Oops, something went wrong</>

        return <Component
            cockt_name={cocktName}
            onChangeFunction={onChangeFunction}
            resetState={resetState}
        />
    }
    return HelperComponent
}

export default WithData