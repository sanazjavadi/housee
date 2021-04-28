/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { RadialNumberInput } from './index';

import { IRadialNumberInput } from './RadialNumberInput';

// eslint-disable-next-line prettier/prettier
const Template: Story<IRadialNumberInput.IProps> = (args) => <RadialNumberInput {...args} />;

export const RadialNumberInputStory = Template.bind({});

export default {
  title: 'Components/RadialNumberInput',
  component: RadialNumberInput,
} as Meta;
RadialNumberInputStory.args = {
  /* the args you need here will depend on your component */
};
