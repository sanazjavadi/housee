/* eslint-disable import/no-named-as-default */
import React from 'react';
import { NextPage } from 'next';

import { ISendAnOfferPage } from '@Interfaces/index';

// Views
import SendAnOffer from '@containers/SendAnOffer';

export const SendAnOfferPage: NextPage<ISendAnOfferPage.IProps> = () => <SendAnOffer />;

// Detail.getInitialProps = async () => ({
//   namespacesRequired: ['common', 'main'],
// });

export default SendAnOffer;
