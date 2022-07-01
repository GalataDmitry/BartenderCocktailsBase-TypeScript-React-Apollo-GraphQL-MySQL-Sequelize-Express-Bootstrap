import React, {FC, useState} from "react"
import {useMutation} from "@apollo/client"
// import WithData from "./hoc/WithData"
import {ICreateCocktails} from "../reactTypes/reactTypes"
import {ICreateCocktailInputType, ICreateCocktailInputType_1} from '../apolloTypes/apolloTypes'
import {CREATE_COCKTAIL} from "../mutation/createCocktail"

const AddCocktails: FC<ICreateCocktails<string, number>> = ({onChangeMap, onChange, reset}) => {

    const addInputField = () => {
        const newField = {ing_name: '', volume: ''}
        setCocktIngs([...cocktIngs, newField])
    }
    const [cocktNameDesc, setCocktNameDesc] = useState<ICreateCocktailInputType>({
        cockt_name: '',
        cockt_desc: ''
    })
    console.log('cocktNameDesc', cocktNameDesc)
    const [cocktIngs, setCocktIngs] = useState<ICreateCocktailInputType_1[]>([{
        ing_name: '', volume: ''
    }])
    const activateButton = () => {
        const data = [...cocktIngs]
        let flag
        data.map(el => {
            return flag = el.ing_name === '' || el.volume === ''
        })
        return flag
    }
    const [createCocktail] = useMutation(CREATE_COCKTAIL, {
        variables: {
            cocktData: [{
                cocktNameDesc,
                cocktIngs
            }]
        }
    })
    const onChangeCocktNameDesc: typeof onChange = (event) => {
        setCocktNameDesc({...cocktNameDesc, [event.target.name]: event.target.value})
    }

    const onChangeCocktIngs: typeof onChangeMap = (event, index) => {
        let data = [...cocktIngs]
        let names = event.target.name
        data[index][names] = event.target.value
        setCocktIngs(data)
    }

    const resetState: typeof reset = (event) => {
        setCocktNameDesc({
            cockt_name: '',
            cockt_desc: '',
        })
        setCocktIngs([{ing_name: '', volume: ''}])
    }

    return <div className='container-fluid'>
        <div className="row">
            <div className="col">
                <input
                    onChange={(event) => onChangeCocktNameDesc(event)}
                    placeholder='cocktail name'
                    value={cocktNameDesc.cockt_name}
                    name='cockt_name'
                />
                <button
                    onClick={addInputField}
                    disabled={activateButton()}
                    className='btn btn-sm btn-info'>
                    Add ingredient
                </button>
            </div>
        </div>
        {cocktIngs?.map((ing, index) => {
            return <div className="row mt-3">
                <div className="col">
                    <input
                        onChange={(event) => onChangeCocktIngs(event, index)}
                        placeholder='ingredient'
                        value={ing.ing_name}
                        name='ing_name'
                    />
                    <input
                        onChange={(event) => onChangeCocktIngs(event, index)}
                        placeholder='volume'
                        value={ing.volume}
                        name='volume'
                    />
                </div>
            </div>

        })}
        <input
            onChange={(event) => onChangeCocktNameDesc(event)}
            className='mt-3'
            placeholder='description'
            value={cocktNameDesc.cockt_desc}
            name='cockt_desc'
        />
        <div className="row">
            <div className="col mt-3">
                <button
                    onClick={(event) => {
                        createCocktail()
                        resetState(event)
                    }}
                    className='btn btn-sm btn-info'>
                    Add cocktail
                </button>
            </div>
        </div>
    </div>
}

export default AddCocktails