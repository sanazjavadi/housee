/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MoreFilters } from './index';

import { IMoreFilters } from './MoreFilters';

// eslint-disable-next-line arrow-parens
const Template: Story<IMoreFilters.IProps> = (args) => <MoreFilters {...args} />;

export const MoreFiltersStory = Template.bind({});

export default {
  title: 'Components/MoreFilters',
  component: MoreFilters,
} as Meta;

MoreFiltersStory.args = {
  /* the args you need here will depend on your component */
};
