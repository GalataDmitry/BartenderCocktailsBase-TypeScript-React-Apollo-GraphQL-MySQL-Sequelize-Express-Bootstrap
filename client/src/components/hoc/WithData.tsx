import {FC, useState} from "react"
import {IAddCocktails} from "../types/types"

const WithData = (Component: FC<IAddCocktails<string, number>>) => {

    const HelperComponent: FC<IAddCocktails<string, number>> = (hocProps) => {

        const [cocktName, setCocktName] = useState<typeof hocProps.cockt_name>('')

        const onChangeFunction: typeof hocProps.onChangeFunction= (event) =>
            setCocktName(event.target.value)
        const resetState: typeof hocProps.resetState = () => setCocktName('')

        return <Component
            cockt_name={cocktName}
            onChangeFunction={onChangeFunction}
            resetState={resetState}
        />
    }
    return HelperComponent
}

export default WithData