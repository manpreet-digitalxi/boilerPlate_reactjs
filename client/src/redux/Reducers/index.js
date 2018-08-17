import { combineReducers } from "redux";
import postReducer from "../../Pages/Home-page/Reducer";

export default combineReducers({
  post: postReducer
});
