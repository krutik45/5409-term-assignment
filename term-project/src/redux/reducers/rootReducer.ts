import { combineReducers } from "redux";
import addItems from "./addItem";

const rootReducers = combineReducers({
  addItem: addItems,
});

export type RootState = ReturnType<typeof rootReducers>;

export default rootReducers;
