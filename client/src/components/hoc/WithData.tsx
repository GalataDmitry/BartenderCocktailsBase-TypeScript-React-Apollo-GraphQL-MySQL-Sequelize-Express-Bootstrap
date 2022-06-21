// import {FC, useState} from "react"
// import {useMutation, useQuery} from "@apollo/client"
// import {GET_ALL_COCKTAILS} from "../../query/getAllCocktails"
// import {CREATE_COCKTAIL} from "../../mutation/createCocktail"
// import {ICreateCocktails} from "../../reactTypes/reactTypes"
// import {IGetAllCocktailsData, ICreateCocktailInputType} from '../../apolloTypes/apolloTypes'
//
// const WithData = (Component: FC<ICreateCocktails<string, number> & IGetAllCocktailsData>) => {
//
//     const HelperComponent: FC<ICreateCocktails<string, number> & ICreateCocktailInputType> = (hocProps) => {
//         const [cocktName, setCocktName] = useState<typeof hocProps.cockt_name>('')
//         const [description, setDescription] = useState<typeof hocProps.cockt_desc>('')
//         const [ingredients, setIngredients] = useState<typeof hocProps.ing_name>([])
//         const {loading, error, data} = useQuery<IGetAllCocktailsData>(GET_ALL_COCKTAILS)
//         console.log(data)
//         const [createCocktail] = useMutation(CREATE_COCKTAIL, {
//                 variables: {
//                     cockt_name: cocktName,
//                     cockt_desc: description,
//                     ing_name: ingredients
//                 }
//             }
//         )
//
//         const onChangeFunction: typeof hocProps.onChangeFunction = (event) =>
//             setCocktName(event.target.value)
//         const resetState: typeof hocProps.resetState = (event) => setCocktName('')
//
//         if (loading) return <>Loading...</>
//         if (error) return <>Oops, something went wrong</>
//         return <Component
//             cockt_name={cocktName}
//             getAllCocktails={data!.getAllCocktails}
//             // createCocktail={createCocktail}
//             onChangeFunction={onChangeFunction}
//             resetState={resetState}
//          />
//
//     }
//     return HelperComponent
// }
//
// export default WithData
export {}