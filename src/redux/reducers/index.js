import { combineReducers } from "redux";
import todoReducer from "./todos";
import filtersReducer from "./todoFilters";

export default combineReducers({
  todoState: todoReducer,
  filter: filtersReducer,
});
