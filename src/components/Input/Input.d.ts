import React from 'react';

declare namespace IInput {
  export interface IProps {
    type: React.PropsWithChildren;
    label?: string;
    hasIcon?: any;
    theme?: string;
    placeholder?: string;
    change: Function;
    value: string | null;
    id?: string;
    error?: any;
    customStyles?: object;
  }
}

export { IInput };
