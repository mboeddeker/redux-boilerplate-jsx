import {combineReducers} from "redux";
import {changeText} from "./ChangeTextReducer";
import {asyncNumber} from "./AsyncReducerForThunk";

/* Here I combine some Reducers, to have them in my global state etc. */
export default combineReducers({changeText, asyncNumber})