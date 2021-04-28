/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { SwitchInput } from './index';

import { ISwitchInput } from './SwitchInput';

// eslint-disable-next-line arrow-parens
const Template: Story<ISwitchInput.IProps> = (args) => <SwitchInput {...args} />;

export const SwitchInputStory = Template.bind({});

export default {
  title: 'Components/SwitchInput',
  component: SwitchInput,
} as Meta;

SwitchInputStory.args = {
  /* the args you need here will depend on your component */
};
