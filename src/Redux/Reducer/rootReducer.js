import { combineReducers } from "redux";
import { categoriesReducer } from './categoriesReducer'
import { productsReducer } from "./productsReducer";
import { cartReducer } from './cartReducer'

export const rootReducer = combineReducers({
    Categories: categoriesReducer,
    Products: productsReducer,
    Cart: cartReducer
})