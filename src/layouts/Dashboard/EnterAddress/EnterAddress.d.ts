declare namespace IEnterAddress {
  export interface IProps {
    changePageHandler: Function;
  }
  export interface IState {
    streetAddress?: string;
    unitNumber?: string;
    postalCode?: string;
    city?: object | null;
    province?: object | null;
  }
}

export { IEnterAddress };
