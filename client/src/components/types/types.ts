import React from "react"

export interface IAddCocktails<T, U> {
    cockt_name?: T
    ingredient?: T
    volume?: U
    onChangeFunction?: (event: React.ChangeEvent<HTMLInputElement>) => void
    resetState?: () => void
}