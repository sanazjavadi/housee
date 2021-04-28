/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { NavbarContainer } from './index';

import { INavbarContainer } from './NavbarContainer';

// eslint-disable-next-line arrow-parens
const Template: Story<INavbarContainer.IProps> = (args) => <NavbarContainer {...args} />;

export const NavbarContainerStory = Template.bind({});

export default {
  title: 'Components/NavbarContainer',
  component: NavbarContainer,
} as Meta;


NavbarContainerStory.args = {
    /* the args you need here will depend on your component */
}