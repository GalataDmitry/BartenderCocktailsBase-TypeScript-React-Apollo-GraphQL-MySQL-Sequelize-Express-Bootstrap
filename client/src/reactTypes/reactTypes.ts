import {ChangeEvent, MouseEvent} from "react"

export interface ICreateCocktails<T, U> {
    cockt_name?: T
    ingredient?: T
    volume?: U
    onChangeMap?: (event: ChangeEvent<HTMLInputElement>, index: number) => void
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    reset?: (event: MouseEvent<HTMLButtonElement>) => void
}