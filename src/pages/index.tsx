import React from 'react';
import { NextPage } from 'next';

import { IHomePage } from '@Interfaces/index';

// Views
import Home from '@containers/Home';

export const IndexPage: NextPage<IHomePage.IProps> = () => <Home />;

// IndexPage.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default IndexPage;
