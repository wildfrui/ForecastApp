import { searchTermReducer } from "./searchTermReducer";
import { combineReducers } from "redux";

export default combineReducers({
  searchTerm: searchTermReducer,
});
