/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { IOfferDashboardRentPage } from '@Interfaces/index';

// Views
import OfferDashboardRent from '@containers/OfferDashboardRent';

export const OfferDashboardRentPage: NextPage<IOfferDashboardRentPage.IProps> = () => <OfferDashboardRent />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default OfferDashboardRent;
