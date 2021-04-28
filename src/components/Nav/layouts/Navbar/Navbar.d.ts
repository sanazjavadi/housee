declare namespace INavbar {
  export interface IProps {
    onMouseLeave?: Function;
  }
}
declare namespace INavbarItem {
  export interface IProps {
    onMouseEnter?: Function;
    title?: string;
  }
}

export { INavbar, INavbarItem };
