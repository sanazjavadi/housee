/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SelectInput } from './index';

import { ISelectInput } from './SelectInput';

// eslint-disable-next-line arrow-parens
const Template: Story<ISelectInput.IProps> = (args) => <SelectInput {...args} />;

export const SelectInputStory = Template.bind({});

export default {
  title: 'Components/SelectInput',
  component: SelectInput,
} as Meta;

SelectInputStory.args = {
  /* the args you need here will depend on your component */
  offerItems: ['206,000$', '207,000$', '209,000$', '210,000$'],
};
