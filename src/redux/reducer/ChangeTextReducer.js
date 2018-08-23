// @flow
import type {IActionType} from "../actions";
import {ACTION} from "../actions";

export type ISTATE = {
  valueText?: string;
  randomNumber?: number;
}

const initalState: ISTATE = {
  valueText: "My my mmy"
};

export const changeText = (state: ISTATE = initalState, action: IActionType): ISTATE => {
  switch (action.type) {
    case ACTION.CHANGE_TEXT:
      return {...state, valueText: 'Ey no'};
    default:
      return state;
  }
};