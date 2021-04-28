/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import  { AdditionalInfo } from './index';

import { IAdditionalInfo } from './AdditionalInfo';

// eslint-disable-next-line arrow-parens
const Template: Story<IAdditionalInfo.IProps> = (args) => <AdditionalInfo {...args} />;

export const AdditionalInfoStory = Template.bind({});

export default {
  title: 'Components/AdditionalInfo',
  component: AdditionalInfo,
} as Meta;


AdditionalInfoStory.args = {
    /* the args you need here will depend on your component */
}