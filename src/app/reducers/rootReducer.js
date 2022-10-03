import { combineReducers } from "redux";
import todoReducers from "./index";

const reducers = combineReducers({
  todoReducers,
});

export default reducers;
