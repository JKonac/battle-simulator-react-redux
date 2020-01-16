import React from "react"
import useBattleMechanics from "../hooks/useBattleMechanics"
import Dice from "./Dice"
import {useSelector} from "react-redux"
import playerImage from '../graphics/Player.png'
import monsterImage from '../graphics/Monster.png'

function GameView() {

    const {
        rollDices,
        resetGame,
    } = useBattleMechanics()

    const monsterHP = useSelector(state => state.monsterHP)
    const playerHP = useSelector(state => state.playerHP)
    const message = useSelector(state => state.message)
    const dices = useSelector(state => state.currentDices)
    const winner = useSelector(state => state.winner)
    
    return (
        <>
            <div className="left-character-stats">
                <img src={playerImage} alt="" />
                <div className="stats">
                    <h2>Player</h2>
                    <p>{playerHP} / 100</p>
                    <meter value={playerHP} min="0" max="100"></meter>
                </div>
            </div>

            <div className="left-character-dice">
                <Dice value={dices[0]} />
                <Dice value={dices[1]} />
            </div>

            <div className="status-message">
                <p className={winner}>{message}</p>
            </div>

            <div className="right-character-stats">
                <img src={monsterImage} alt="" />
                <div className="stats">
                    <h2>Monster</h2>
                    <p>{monsterHP} / 100</p>
                    <meter value={monsterHP} min="0" max="100"></meter>
                </div>
            </div>
            
            <div className="right-character-dice">
                <Dice value={dices[2]} />
                <Dice value={dices[3]} />
            </div>

            <button onClick={(winner === "" ? rollDices : resetGame)}>
                {winner === "" ? 'ATTACK!' : "Play again"}
            </button>
        </>
    )

}

export default GameView