import React, {FC} from "react"
// import WithData from "./hoc/WithData"
import {ICreateCocktails} from "../reactTypes/reactTypes"

const AddCocktails: FC<ICreateCocktails<string, number>> = ({cockt_name, onChangeFunction, resetState}) => {

    return <div className='container-fluid'>
        <div className="row">
            <div className="col">
                <input
                    onChange={(event) => onChangeFunction!(event)}
                    placeholder='cocktail name'
                    value={cockt_name}
                />
            </div>
            <div className="row">
                <div className="col mt-3">
                    <button
                        onClick={(event) => resetState!(event)}
                        className='btn btn-info'>
                        Add cocktail
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default AddCocktails