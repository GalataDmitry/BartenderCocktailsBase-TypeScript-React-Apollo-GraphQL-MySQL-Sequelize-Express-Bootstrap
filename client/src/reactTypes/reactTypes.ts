import {ChangeEvent, MouseEvent} from "react"

export interface ICreateCocktails<T, U> {
    cockt_name?: T
    ingredient?: T
    volume?: U
    onChangeFunction?: (event: ChangeEvent<HTMLInputElement>) => void
    resetState?: (event: MouseEvent<HTMLButtonElement>) => void
}