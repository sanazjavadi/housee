declare namespace IVerticalProductCard {
  export interface IProps {
    status: string;
    homeDetails: {
      address: string;
      sqft: string;
      beds: string;
    };
    offerPrice: {
      agentOffer: string;
      houseeOffer: string;
      YourOffer: string;
    };
  }
}

export { IVerticalProductCard };
