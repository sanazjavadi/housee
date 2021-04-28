/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { Meta, Story } from '@storybook/react/types-6-0';
import { CustomLineChart } from './index';

import { ILineChart } from './LineChart';

// eslint-disable-next-line arrow-parens
const Template: Story<ILineChart.IProps> = (args) => <CustomLineChart {...args} />;

export const LineChartStory = Template.bind({});

export default {
  title: 'Components/CustomLineChart',
  component: CustomLineChart,
} as Meta;
LineChartStory.args = {
  /* the args you need here will depend on your component */
};
