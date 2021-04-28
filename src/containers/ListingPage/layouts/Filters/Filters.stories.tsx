/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Filters } from './index';

import { IFilters } from './Filters';

// eslint-disable-next-line arrow-parens
const Template: Story<IFilters.IProps> = (args) => <Filters {...args} />;

export const FiltersStory = Template.bind({});

export default {
  title: 'Components/Filters',
  component: Filters,
} as Meta;

FiltersStory.args = {
  /* the args you need here will depend on your component */
};
