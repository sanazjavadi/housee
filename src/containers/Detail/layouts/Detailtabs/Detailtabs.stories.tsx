/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { Detailtabs } from './index';

import { IDetailtabs } from './Detailtabs';

// eslint-disable-next-line arrow-parens
const Template: Story<IDetailtabs.IProps> = (args) => <Detailtabs {...args} />;

export const DetailtabsStory = Template.bind({});

export default {
  title: 'Components/Detailtabs',
  component: Detailtabs,
} as Meta;

DetailtabsStory.args = {
  /* the args you need here will depend on your component */
};
