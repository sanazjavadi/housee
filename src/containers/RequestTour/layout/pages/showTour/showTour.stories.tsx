/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import showTour from './index';

import { IShowTour } from './showTour';

// eslint-disable-next-line prettier/prettier
const Template: Story<IShowTour.IProps> = (args) => <showTour {...args} />;

export const showTourStory = Template.bind({});

showTourStory.args = {
  /* the args you need here will depend on your component */
};

export default {
  title: 'RequestTour/Layout/showTour',
  component: showTour,
} as Meta;
