import { combineReducers } from "redux";
import { createStore,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension";
import { getAllEquipmentsReducer } from "./reducers/equipmentReducer";
import { addToCartReducer } from "./reducers/cartReducer";

const finalReducer=combineReducers({
    getAllEquipmentsReducer: getAllEquipmentsReducer,
    addToCartReducer:addToCartReducer
})
const intialState={}

const composeEnhancers=composeWithDevTools({})

const store=createStore(finalReducer,intialState,composeEnhancers(applyMiddleware(thunk)))

export default store