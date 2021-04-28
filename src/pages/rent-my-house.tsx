/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { IRentMyHousePage } from '@Interfaces/index';

// Views
import RentMyHouse from '@containers/RentMyHouse';

export const RentMyHousePage: NextPage<IRentMyHousePage.IProps> = () => <RentMyHouse />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default RentMyHouse;
