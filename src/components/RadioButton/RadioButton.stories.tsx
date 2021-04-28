/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RadioButton } from './index';

import { IRadioButton } from './RadioButton';

// eslint-disable-next-line arrow-parens
const Template: Story<IRadioButton.IProps> = (args) => <RadioButton {...args} />;

export const RadioButtonStory = Template.bind({});

export default {
  title: 'Components/RadioButton',
  component: RadioButton,
} as Meta;

RadioButtonStory.args = {
  /* the args you need here will depend on your component */
  inputType: 'radioButton',
};
