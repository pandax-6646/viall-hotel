import { createStore } from "redux";
import demoReducer from "./demo";
import userReducer from "./user";
import { combineReducers } from "redux";

let reducers = combineReducers({
  demo: demoReducer,
  user: userReducer,
});

export default createStore(reducers);
