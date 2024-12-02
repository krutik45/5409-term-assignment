import { createStore } from "redux";
import rootReducer from "./reducers/rootReducer";

const store = createStore(rootReducer);

export type RootState = ReturnType<typeof rootReducer>;

export default store;
