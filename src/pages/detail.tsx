/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { IDetailPage } from '@Interfaces/index';

// Views
import Detail from '../containers/Detail';

export const DetailPage: NextPage<IDetailPage.IProps> = () => <Detail />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default Detail;
