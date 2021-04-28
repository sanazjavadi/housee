/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Paginator } from './index';

import { IPaginator } from './Paginator';

// eslint-disable-next-line prettier/prettier
const Template: Story<IPaginator.IProps> = (args) => <Paginator {...args} />;

export const PaginatorStory = Template.bind({});

export default {
  title: 'Components/Paginator',
  component: Paginator,
} as Meta;
PaginatorStory.args = {
  /* the args you need here will depend on your component */
};
