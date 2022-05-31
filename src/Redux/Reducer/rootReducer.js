import { combineReducers } from "redux";
import { categoriesReducer } from './categoriesReducer'
import { productsReducer } from "./productsReducer";

export const rootReducer = combineReducers({
    Categories: categoriesReducer,
    Products: productsReducer
})