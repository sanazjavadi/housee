/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { MobileFilterMenu } from './index';

import { IMobileFilterMenu } from './MobileFilterMenu';

// eslint-disable-next-line arrow-parens
const Template: Story<IMobileFilterMenu.IProps> = (args) => <MobileFilterMenu {...args} />;

export const MobileFilterMenuStory = Template.bind({});

export default {
  title: 'Components/MobileFilterMenu',
  component: MobileFilterMenu,
} as Meta;

MobileFilterMenuStory.args = {
  /* the args you need here will depend on your component */
};
