import type {IActionType} from "../actions";
import {ACTION} from "../actions";

export interface IStateAsyncNumber {
  number: number;
}
const initialState: IStateAsyncNumber = {
  number: 0
};

export const asyncNumber = (
  state: IStateAsyncNumber = initialState,
  action: IActionType
) => {
  switch (action.type) {
    case ACTION.ASYNC_NUMBER:
      return { ...state, number: action.payload };
    case ACTION.CLEAR_NUMBER:
      return { ...state, number: action.payload };
    default:
      return state;
  }
};
