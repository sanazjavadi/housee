/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Select from './index';

import { ISelect } from './Select';

// eslint-disable-next-line prettier/prettier
const Template: Story<ISelect.IProps> = (args) => <Select {...args} />;

export const SelectStory = Template.bind({});

SelectStory.args = {
  /* the args you need here will depend on your component */
  label: 'select',
  theme:'dd-wrapper',
  options : [
    {
      id: 0,
      title: 'New York',
      selected: false,
      key: 'location',
    },
    {
      id: 1,
      title: 'Dublin',
      selected: false,
      key: 'location',
    },
    {
      id: 2,
      title: 'California',
      selected: false,
      key: 'location',
    },
    {
      id: 3,
      title: 'Istanbul',
      selected: false,
      key: 'location',
    },
    {
      id: 4,
      title: 'Izmir',
      selected: false,
      key: 'location',
    },
    {
      id: 5,
      title: 'Oslo',
      selected: false,
      key: 'location',
    },
  ]
};

export default {
  title: 'Components/Select',
  component: Select,
} as Meta;
