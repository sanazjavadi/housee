/* eslint-disable import/prefer-default-export */

import PymentCaluculate from '@containers/Detail/layouts/DetailOccordion/layouts/PaymentCalculate';
import Historical from '@containers/Detail/layouts/DetailOccordion/layouts/Historical';
import Offers from '@containers/Detail/layouts/DetailOccordion/layouts/Offers';
import PastListing from '@containers/Detail/layouts/DetailOccordion/layouts/PastListing';

export const cardLists = [
  {
    cardHeader: 'Payment Calculator',
    cardToggle: PymentCaluculate,
  },
  {
    cardHeader: 'Historical Avg.Prices of South park',
    cardToggle: Historical,
  },

  {
    cardHeader: 'Offers',
    cardToggle: Offers,
  },
  {
    cardHeader: 'Past listings',
    cardToggle: PastListing,
  },
];

export const cardItems = [
  {
    img:
      'https://images.unsplash.com/photo-1581321825690-944511645947?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 3,
    bt: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1584696049838-8e692282a2e6?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 3,
    bt: 2,
  },
  {
    img: 'https://images.unsplash.com/photo-1589729732079-3b53922afd49?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    city: '2545 Medlow Ave',
    address: 'South Park - Los Angeles, CA 90017',
    price: 334000,
    sqft: 1100,
    bed: 3,
    bt: 2,
  },
];
