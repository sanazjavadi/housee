/* eslint-disable import/no-cycle */
import { StateContext } from './index';

export enum ActionType {
  ADD_FILTER_OPTION = 'add filter option',
  SIGN_OUT = 'Sign out',
}
export type Action = { type: ActionType.ADD_FILTER_OPTION } | { type: ActionType.SIGN_OUT };
export const reducer = (state: StateContext, action: Action) => {
  switch (action.type) {
    case ActionType.ADD_FILTER_OPTION:
      return { ...state, filterOption: action.payload };
    case ActionType.SIGN_OUT:
      return { ...state, properties: [] };
    default:
      throw new Error('Not among actions');
  }
};
