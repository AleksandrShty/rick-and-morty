import {combineReducers} from "redux"
import { likesReducer } from "./likesReducer"
import { cardsReducer } from "./cardsReducer"

export const rootReducer = combineReducers({
    likes: likesReducer,
    cards: cardsReducer
})