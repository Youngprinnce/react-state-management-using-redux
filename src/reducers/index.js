import { combineReducers } from "redux"
import counterReducer from "./counterReducer"
import movieReducer from "./movieReducer"


const AllReducers = combineReducers({ counterReducer, movieReducer});

export default AllReducers;