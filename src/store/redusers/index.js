import { combineReducers } from "redux";
import { orderReduser } from "./orderReduser";


export const rootReduser = combineReducers({
    order: orderReduser
})