/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { NearbyHomesList } from './index';

import { INearbyHomesList } from './NearbyHomesList';

// eslint-disable-next-line arrow-parens
const Template: Story<INearbyHomesList.IProps> = (args) => <NearbyHomesList {...args} />;

export const NearbyHomesListStory = Template.bind({});

export default {
  title: 'Components/NearbyHomesList',
  component: NearbyHomesList,
} as Meta;

NearbyHomesListStory.args = {
  /* the args you need here will depend on your component */
};
