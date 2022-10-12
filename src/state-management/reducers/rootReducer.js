import { combineReducers } from "redux";
import { countReducer } from "./countReducer"
import { productReducer } from "./productReducer";
export default combineReducers({
    countState: countReducer,
    productState: productReducer
})