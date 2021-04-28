/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { IRequestTourPage } from '@Interfaces/index';

// Views
import RequestTour from '@containers/RequestTour';

export const RequestTourPage: NextPage<IRequestTourPage.IProps> = () => <RequestTour />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default RequestTourPage;
