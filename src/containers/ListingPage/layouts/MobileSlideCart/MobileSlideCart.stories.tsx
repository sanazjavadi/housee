/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MobileSlideCart } from './index';

import { IMobileSlideCart } from './MobileSlideCart';

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileSlideCart.IProps> = (args) => <MobileSlideCart {...args} />;

export const MobileSlideCartStory = Template.bind({});

export default {
  title: 'Components/MobileSlideCart',
  component: MobileSlideCart,
} as Meta;

MobileSlideCartStory.args = {
  /* the args you need here will depend on your component */
};
