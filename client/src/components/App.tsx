import React, {FC} from 'react'
import CocktailsList from "./CocktailsList"
import AddCocktails from "./AddCocktails"
import '../styles/App.css'

const App: FC = (): JSX.Element => {
    return <div className="App">
        <header className="App-header">
            <CocktailsList />
            <AddCocktails />
        </header>
    </div>
}

export default App
