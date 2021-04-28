/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { OfferExpand } from './index';

import { IOfferExpand } from './OfferExpand';

// eslint-disable-next-line arrow-parens
const Template: Story<IOfferExpand.IProps> = (args) => <OfferExpand {...args} />;

export const OfferExpandStory = Template.bind({});

export default {
  title: 'Components/OfferExpand',
  component: OfferExpand,
} as Meta;

OfferExpandStory.args = {
  /* the args you need here will depend on your component */
};
