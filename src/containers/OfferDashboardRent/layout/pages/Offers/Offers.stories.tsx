/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { Offers } from './index';

import { IOffers } from './Offers';

// eslint-disable-next-line arrow-parens
const Template: Story<IOffers.IProps> = (args) => <Offers {...args} />;

export const OffersStory = Template.bind({});

export default {
  title: 'Components/Offers',
  component: Offers,
} as Meta;


OffersStory.args = {
    /* the args you need here will depend on your component */
}