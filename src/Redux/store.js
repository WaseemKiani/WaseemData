import { createStore , combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {composeWithDevTools} from "redux-devtools-extension"
import {userReducers} from "../Redux/reducers/userReducers"
import {workerReducers} from "./reducers/workerReducer";
import { publicReducers } from "./reducers/publicReducer";

const reducer = combineReducers({
    User: userReducers,
    Worker: workerReducers,
    Public: publicReducers
})

let initialState = {};

const middleware= [thunk];

const store= createStore(reducer,initialState,composeWithDevTools(applyMiddleware(...middleware)));

export default store;