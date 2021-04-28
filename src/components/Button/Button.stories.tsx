/* eslint-disable arrow-parens */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Button } from './index';

import { IButton } from './Button';

const Template: Story<IButton.IProps> = (args) => <Button {...args} />;

export const ButtonStory = Template.bind({});

export default {
  title: 'Components/Button',
  component: Button,
} as Meta;
ButtonStory.args = {
  /* the args you need here will depend on your component */
  theme: 'primary',
  children: 'click me',
};
