import {combineReducers} from "redux";
import type {IStateChangeText} from "./ChangeTextReducer";
import {changeText} from "./ChangeTextReducer";
import type {IStateAsyncNumber} from "./AsyncReducerForThunk";
import {asyncNumber} from "./AsyncReducerForThunk";

/* Here I combine some Reducers, to have them in my global state etc. */
export default combineReducers({ changeText, asyncNumber });

export interface MainState {
  changeText: IStateChangeText;
  asyncNumber: IStateAsyncNumber;
}
