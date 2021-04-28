/* eslint-disable import/no-named-as-default-member */
/* eslint-disable react/no-children-prop */
import React, { useContext, useReducer } from 'react';
import { IListData } from './state';
import { reducer, Action } from './reducer';

export interface StateContext {
  properties?: IListData[];
  filterOption?: any;
}
export interface Store {
  state: StateContext;
  dispatch?: React.Dispatch<Action>;
}
const data: IListData[] = [
  {
    id: 0,
    title: 'hamid',
  },
];
const defaultState: StateContext = { properties: data, filterOption: [] };
const myContext = React.createContext<Store>({ state: defaultState });
export const useStateContext = () => useContext(myContext);
export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);
  return <myContext.Provider value={{ state, dispatch }} children={children} />;
};
