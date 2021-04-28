/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Input from './index';

import { IInput } from './Input';

// eslint-disable-next-line prettier/prettier
const Template: Story<IInput.IProps> = (args) => <Input {...args} />;

export const InputStory = Template.bind({});

export default {
  title: 'Components/Input',
  component: Input,
} as Meta;

InputStory.args = {
  /* the args you need here will depend on your component */
  label: 'name',
};
