// @flow
import type {IActionType} from "../actions";
import {ACTION} from "../actions";

export interface IStateChangeText {
  valueText?: string;
  randomNumber?: number;
}

const initalState: IStateChangeText = {
  valueText: "My my mmy"
};

export const changeText = (state: IStateChangeText = initalState, action: IActionType): IStateChangeText => {
  switch (action.type) {
    case ACTION.CHANGE_TEXT:
      return {...state, valueText: action.payload};
    default:
      return state;
  }
};