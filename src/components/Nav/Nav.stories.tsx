/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { Nav } from './index';

import { INav } from './Nav';

// eslint-disable-next-line arrow-parens
const Template: Story<INav.IProps> = (args) => <Nav {...args} />;

export const NavStory = Template.bind({});

export default {
  title: 'Components/Nav',
  component: Nav,
} as Meta;


NavStory.args = {
    /* the args you need here will depend on your component */
}