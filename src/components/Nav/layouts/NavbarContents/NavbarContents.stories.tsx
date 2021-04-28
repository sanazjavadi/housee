/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { NavbarContents } from './index';

import { INavbarContents } from './NavbarContents';

// eslint-disable-next-line arrow-parens
const Template: Story<INavbarContents.IProps> = (args) => <NavbarContents {...args} />;

export const NavbarContentsStory = Template.bind({});

export default {
  title: 'Components/NavbarContents',
  component: NavbarContents,
} as Meta;


NavbarContentsStory.args = {
    /* the args you need here will depend on your component */
}