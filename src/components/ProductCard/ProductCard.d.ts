declare namespace IProductCard {
  export interface IProps {
    cardDetails: {
      img: string;
      city: string;
      address: string;
      price: number;
      sqft: number;
      bed: number;
      bt: number;
    };
    size: string;
    onDoubleClick?: Function;
  }
}

export { IProductCard };
