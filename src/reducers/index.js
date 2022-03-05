import { combineReducers } from "redux";
import { searchTermReducer } from "./searchTermReducer";
import { geoDataReducer } from "./geoDataReducer";

export default combineReducers({
  searchTerm: searchTermReducer,
  geo: geoDataReducer,
});
