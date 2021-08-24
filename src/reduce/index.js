import { createStore } from "redux";
import demoReducer from "./demo";
import userReducer from "./user";
import { combineReducers } from "redux";

import { persistStore, persistReducer } from "redux-persist";
import storageSession from "redux-persist/lib/storage/session";

const storageConfig = {
  key: "root",
  storage: storageSession,
  blacklist: [],
};

let reducers = combineReducers({
  demo: demoReducer,
  user: userReducer,
});

const newReducers = persistReducer(storageConfig, reducers);
const store = createStore(newReducers);

export const persistor = persistStore(store);
export default store;
