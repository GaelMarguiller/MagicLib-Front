import { combineReducers } from "redux";


import SetsListReducer from "./sets/setsList";
import SetReducer from "./sets/set";

const setsReducer = combineReducers({
    set: SetReducer,
    sets: SetsListReducer
});

export default setsReducer;
