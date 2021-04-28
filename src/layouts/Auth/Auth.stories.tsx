/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { Auth } from './index';

import { IAuth } from './Auth';

// eslint-disable-next-line arrow-parens
const Template: Story<IAuth.IProps> = (args) => <Auth {...args} />;

export const AuthStory = Template.bind({});

export default {
  title: 'Components/Auth',
  component: Auth,
} as Meta;


AuthStory.args = {
    /* the args you need here will depend on your component */
}