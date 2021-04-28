/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Overview } from './index';

import { IOverview } from './Overview';

// eslint-disable-next-line arrow-parens
const Template: Story<IOverview.IProps> = (args) => <Overview {...args} />;

export const OverviewStory = Template.bind({});

export default {
  title: 'Components/Overview',
  component: Overview,
} as Meta;

OverviewStory.args = {
  /* the args you need here will depend on your component */
};
