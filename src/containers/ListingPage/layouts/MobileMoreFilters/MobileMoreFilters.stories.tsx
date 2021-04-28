/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { MobileMoreFilters } from './index';

import { IMobileMoreFilters } from './MobileMoreFilters';

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileMoreFilters.IProps> = (args) => <MobileMoreFilters {...args} />;

export const MobileMoreFiltersStory = Template.bind({});

export default {
  title: 'Components/MobileMoreFilters',
  component: MobileMoreFilters,
} as Meta;


MobileMoreFiltersStory.args = {
    /* the args you need here will depend on your component */
}