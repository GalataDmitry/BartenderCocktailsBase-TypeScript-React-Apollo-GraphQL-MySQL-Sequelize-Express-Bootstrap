import React, {FC} from "react"
import WithData from "./hoc/WithData"
import {IAddCocktails} from "./types/types"

const AddCocktails: FC<IAddCocktails<string, number>> = ({cockt_name, onChangeFunction, resetState}) => {

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
                        onClick={() => resetState!()}
                        className='btn btn-info'>
                        Add cocktail
                    </button>
                </div>
            </div>
        </div>
    </div>
}

export default WithData(AddCocktails)