/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NumberInput } from './index';

import { INumberInput } from './NumberInput';

// eslint-disable-next-line prettier/prettier
const Template: Story<INumberInput.IProps> = (args) => <NumberInput {...args} />;

export const NumberInputStory = Template.bind({});

export default {
  title: 'Components/NumberInput',
  component: NumberInput,
} as Meta;
NumberInputStory.args = {
  /* the args you need here will depend on your component */
};
