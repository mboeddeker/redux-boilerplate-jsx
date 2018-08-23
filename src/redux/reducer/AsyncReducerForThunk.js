import type {IActionType} from "../actions";
import {ACTION} from "../actions";

const initalState = {
  number: 0
};

export const asyncNumber = (state = initalState, action: IActionType) => {
  switch (action.type) {
    case ACTION.ASYNC_NUMBER:
      return {...state, number: action.payload};
    case ACTION.CLEAR_NUMBER:
      return {...state, number: action.payload};
    default:
      return state;
  }
};