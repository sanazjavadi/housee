import React from 'react';

declare namespace IButton {
  export interface IProps {
    theme?: string;
    children: React.ReactNode;
    hasIcon?: any;
    disabled?: boolean;
    size?: string;
    handleClick?: any;
    height?: string;
    font?: string;
    fontweight?: string;
    borderRadius?: string;
    border?: string;
    fontFamily?: string;
    customStyles?: object;
    active?: boolean;
  }
}

export { IButton };
