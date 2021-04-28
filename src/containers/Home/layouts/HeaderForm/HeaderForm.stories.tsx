/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HeaderForm } from './index';

import { IHeaderForm } from './HeaderForm';

// eslint-disable-next-line arrow-parens
const Template: Story<IHeaderForm.IProps> = (args) => <HeaderForm {...args} />;

export const HeaderFormStory = Template.bind({});

export default {
  title: 'Components/HeaderForm',
  component: HeaderForm,
} as Meta;

HeaderFormStory.args = {
  /* the args you need here will depend on your component */
};
