/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { Navbar } from './index';

import { INavbar } from './Navbar';

// eslint-disable-next-line arrow-parens
const Template: Story<INavbar.IProps> = (args) => <Navbar {...args} />;

export const NavbarStory = Template.bind({});

export default {
  title: 'Components/Navbar',
  component: Navbar,
} as Meta;


NavbarStory.args = {
    /* the args you need here will depend on your component */
}