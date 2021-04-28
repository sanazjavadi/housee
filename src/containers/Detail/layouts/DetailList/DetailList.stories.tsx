/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { DetailList } from './index';

import { IDetailList } from './DetailList';

// eslint-disable-next-line arrow-parens
const Template: Story<IDetailList.IProps> = (args) => <DetailList {...args} />;

export const DetailListStory = Template.bind({});

export default {
  title: 'Components/DetailList',
  component: DetailList,
} as Meta;

DetailListStory.args = {
  /* the args you need here will depend on your component */
};
