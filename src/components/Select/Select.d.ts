declare namespace ISelect {
  export interface IProps {
    label?: string;
    theme?: string;
    options?: Array;
    autocomplate?: boolean;
    selectOnChange: Function;
    defaultSelected: any;
    hasIcon?: any;
    size?: string;
  }
}

export { ISelect };
