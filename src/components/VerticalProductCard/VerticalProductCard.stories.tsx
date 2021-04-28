/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { VerticalProductCard } from './index';

import { IVerticalProductCard } from './VerticalProductCard';

// eslint-disable-next-line prettier/prettier
const Template: Story<IVerticalProductCard.IProps> = (args) => <VerticalProductCard {...args} />;

export const VerticalProductCardStory = Template.bind({});

export default {
  title: 'Components/VerticalProductCard',
  component: VerticalProductCard,
} as Meta;
VerticalProductCardStory.args = {
  /* the args you need here will depend on your component */
  status: 'waiting',
  homeDetails: {
    address: '2356 PLO Ave',
    sqft: '200 sqft',
    beds: '3 Beds',
  },
  offerPrice: {
    agentOffer: '$200,000',
    houseeOffer: '$200,000',
    YourOffer: '$200,000',
  },
};
