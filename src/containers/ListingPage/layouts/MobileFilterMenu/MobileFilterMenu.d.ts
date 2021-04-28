declare namespace IMobileFilterMenu {
  export interface IProps {
    search: string;
    setSearch: Function;
    filterHouseRoom: any;
    filterHouseType: any;
    setHouseType: Function;
    houseType: any;
    setRoom?: Function;
    currentRoom?: any;
    submitFilter?: Function;
  }
}

export { IMobileFilterMenu };
