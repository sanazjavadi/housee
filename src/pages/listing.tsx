import React from 'react';
import { NextPage } from 'next';

import { IListingPage } from '@Interfaces/index';

// Views
import ListingPage from '../containers/ListingPage';

export const IndexPage: NextPage<IListingPage.IProps> = () => <ListingPage />;

// IndexPage.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default IndexPage;
