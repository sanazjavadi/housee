declare namespace ICreditCard {
  export interface IProps {}
}
declare namespace ICredit {
  export interface IProps {
    cardsInfo: {
      icon: any;
      number: string;
      Expire: string;
    };
  }
}

export { ICreditCard, ICredit };
