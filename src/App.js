import React from "react"
import GameView from "./components/GameView"

function App() {
    
    return (
        <div className="game-layout">
            <header>
                <h1>BATTLE SIMULATOR (React + Redux)</h1>
            </header>
            <GameView />
        </div>
    )
    
}

export default App