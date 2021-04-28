/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { ISellMyHousePage } from '@Interfaces/index';

// Views
import SellMyHouse from '@containers/SellMyHouse';

export const SellMyHousePage: NextPage<ISellMyHousePage.IProps> = () => <SellMyHouse />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default SellMyHouse;
