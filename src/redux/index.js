import {createStore} from "redux"

export function damageCharacter(character, damage) {
    return {
        type: "DAMAGE_CHARACTER",
        payload: {
            character,
            damage,
        }
    }
}

export function characterWin(character) {
    return {
        type: "CHARACTER_WIN",
        payload: character,
    }
}

export function setMessage(message) {
    return {
        type: "SET_MESSAGE",
        payload: message,
    }
}

export function updateDices(dices) {
    return {
        type: "UPDATE_DICES",
        payload: dices,
    }
}

export function resetSession() {
    return {
        type: "RESET_SESSION",
    }
}

export const initialState = {
    message: "The battle has begun!",
    playerHP: 100,
    monsterHP: 100,
    currentDices: Array(4).fill("X"),
    winner: "",
}

export function reducer(state = initialState, action) {
    switch(action.type) {
        case "DAMAGE_CHARACTER":
            if(action.payload.character === "monster"){
                return {
                    ...state,
                    monsterHP: state.monsterHP - action.payload.damage
                }
            } else if(action.payload.character === "player"){
                return {
                    ...state,
                    playerHP: state.playerHP - action.payload.damage
                }
            }
            break;
        case "CHARACTER_WIN":
            if(action.payload === "monster"){
                return {
                    ...state,
                    playerHP: 0,
                    message: "Game Over",
                    winner: "monster"
                }
            } else if(action.payload === "player"){
                return {
                    ...state,
                    monsterHP: 0,
                    message: "You Win",
                    winner: "player"
                }
            }
            break;
        case "SET_MESSAGE":
            return {
                ...state,
                message: action.payload
            }
        case "UPDATE_DICES":
            return {
                ...state,
                currentDices: action.payload
            }
        case "RESET_SESSION":
            return {
                ...initialState
            }
        default:
            return state
    }
}

const store = createStore(reducer)

export default store
