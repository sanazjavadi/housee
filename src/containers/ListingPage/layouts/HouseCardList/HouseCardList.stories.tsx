/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { HouseCardList } from './index';

import { IHouseCardList } from './HouseCardList';

// eslint-disable-next-line arrow-parens
const Template: Story<IHouseCardList.IProps> = (args) => <HouseCardList {...args} />;

export const HouseCardListStory = Template.bind({});

export default {
  title: 'Components/HouseCardList',
  component: HouseCardList,
} as Meta;

HouseCardListStory.args = {
  /* the args you need here will depend on your component */
};
