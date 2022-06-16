import React, {FC} from 'react'
import AddCocktails from "./AddCocktails"
import '../styles/App.css'

const App: FC = (): JSX.Element => {
    return <div className="App">
        <header className="App-header">
            <AddCocktails />
        </header>
    </div>
}

export default App
