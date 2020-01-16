import {useEffect} from "react"
import {useSelector, useDispatch} from "react-redux"
import {damageCharacter, characterWin, setMessage, updateDices, resetSession} from "../redux"

function useBattleMechanics() {

    const playerHP = useSelector(state => state.playerHP)
    const monsterHP = useSelector(state => state.monsterHP)
    const dispatch = useDispatch()

    function rollDices(){
        const rolls = Array(4).fill().map(() => Math.floor(Math.random() * 6) + 1);
        dispatch(updateDices(rolls))
        calculateDamage(rolls)
    }
    
    function calculateDamage(rolls) {
        const playerDmg = rolls[0] + rolls[1]
        const monsterDmg = rolls[2] + rolls[3]
        const damageSum = Math.abs(playerDmg - monsterDmg)

        if(playerDmg > monsterDmg){
            dispatch(damageCharacter("monster", damageSum))
            dispatch(setMessage(`Monster received ${damageSum} damage!`))

        } else if(monsterDmg > playerDmg){
            dispatch(damageCharacter("player", damageSum))
            dispatch(setMessage(`You received ${damageSum} damage!`))
        } else {
            dispatch(setMessage("Both missed their attacks!"))
        }
    }
    
    function resetGame(){
        dispatch(resetSession())
    }

    useEffect(() => {
        if(playerHP <= 0) {
            dispatch(characterWin("monster"))
        } else if(monsterHP <= 0) {
            dispatch(characterWin("player"))
        }
    }, [playerHP, monsterHP])
    
    return {rollDices, resetGame}
}

export default useBattleMechanics
