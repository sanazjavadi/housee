/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import Verification from './index';

import { IVerification } from './Verification';

// eslint-disable-next-line prettier/prettier
const Template: Story<IVerification.IProps> = (args) => <Verification {...args} />;

export const VerificationStory = Template.bind({});

VerificationStory.args = {
  /* the args you need here will depend on your component */
};

export default {
  title: 'RequestTour/Layout/Verification',
  component: Verification,
} as Meta;
