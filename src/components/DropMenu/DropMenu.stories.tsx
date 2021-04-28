/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import DropMenu from './index';

import { IDropDown } from './DropMenu';

// eslint-disable-next-line prettier/prettier
const Template: Story<IDropDown.IProps> = (args) => <DropMenu {...args} />;

export const DropMenuStory = Template.bind({});

export default {
  title: 'Components/DropMenu',
  component: DropMenu,
} as Meta;

DropMenuStory.args = {
  /* the args you need here will depend on your component */
};
